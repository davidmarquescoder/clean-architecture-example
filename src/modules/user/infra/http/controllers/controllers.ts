// Modules Imports
import { Request, Response } from 'express';
import UserRepository from '../../repositories/Repository';
import UserService from '../../../services/UserService';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export default class UserController {
	static async create(request: Request, response: Response): Promise<Response> {

		const data = {
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
			confirmPassword: request.body.confirmPassword,
			phone: request.body.phone
		};

		try {
			await userService.createUser(data);
			return response.status(201).json({ msg: 'User Created!' });
		}
		catch (error) {
			return response.status(500).json({ msg: error });
		}
	}
}

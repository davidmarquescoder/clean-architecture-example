// Modules Imports
import { Request, Response } from 'express';
import UserRepository from '../../repositories/inmen/UserRepository';
import UserService from '../../../services/UserService';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export default class UserController {
	static async create(request: Request, response: Response): Promise<Response> {
		const { name, email, password, phone } = request.body;
		const data = {
			name,
			email,
			password,
			phone
		};

		try {
			await userService.createUser(data);
			return response.status(201).json({ msg: 'User Created!' });
		} catch (error) {
			console.log(error);
			return response.status(500).json({ msg: error });
		}
	}
}

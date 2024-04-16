// Modules Imports
import { Request, Response } from 'express';
import UserRepository from '../../repositories/inmen/UserRepository';
import UserService from '../../../services/UserService';


const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export default class UserController{

	static async create (request: Request, response: Response): Promise<Response> {
		const { name } = request.body;

		try{
			await userService.createUser(name);
			return response.status(201).json({msg: 'User Created!'});
		}
		catch(error){
			console.log(error);
			return response.status(500).json({msg: error});
		}
	}

}

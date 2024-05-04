// Modules Imports
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import Repository from '../../repositories/Repository';
import Service from '../../../services/services';

const prismaClient = new PrismaClient();
const repository = new Repository(prismaClient);
const service = new Service(repository);

export default class Controllers {
	static async create(request: Request, response: Response): Promise<Response> {

		const data = {
			name: request.body.name,
			email: request.body.email,
			password: request.body.password,
			confirmPassword: request.body.confirmPassword,
			phone: request.body.phone
		};

		try {
			await service.create(data);
			return response.status(201).json({ msg: 'User Created!' });
		}
		catch (error) {
			return response.status(500).json({ msg: error });
		}
	}
}

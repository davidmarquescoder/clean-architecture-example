// Modules Imports
import IUserRepository from '../../../repositories/IUserRepository';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class User {
	constructor(public name: string){}

	async save(): Promise<void>{
		await prisma.user.create({
			data: {name: this.name}
		});
	}
}

class UserRepository implements IUserRepository {
	async save(name: string): Promise<void> {
		const user = new User(name);
		await user.save();
	}
}

export default UserRepository;

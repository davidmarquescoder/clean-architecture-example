// Modules Imports
import { User } from '../../entities/user';
import IRepository from './IRepository';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

class UserDB {
	constructor(public user: User) {}

	async save(): Promise<void> {
		await prisma.user.create({
			data: {
				name: this.user.name,
				email: this.user.email,
				password: this.user.password,
				phone: this.user.phone
			}
		});
	}

	static async findByEmail(email: string) {
		return await prisma.user.findFirst({
			where: {
				email: email
			}
		});
	}
}


class Repository implements IRepository {
	async findByEmail(email: string): Promise<User | null> {
		const userExists = UserDB.findByEmail(email);
		return userExists;
	}

	async save(user: User): Promise<void> {
		const newUser = new UserDB(user);
		await newUser.save();
	}
}

export default Repository;

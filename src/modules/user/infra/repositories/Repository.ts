// Modules Imports
import { User } from '../../entities/user';
import IRepository from './IRepository';
import { PrismaClient } from '@prisma/client';


class Repository implements IRepository {
	constructor(private prismaClient: PrismaClient){}

	async findByEmail(email: string): Promise<User | null> {
		return await this.prismaClient.user.findFirst({where: {email: email}});
	}

	async save(user: User): Promise<void> {
		await this.prismaClient.user.create({data: user});
	}
}

export default Repository;

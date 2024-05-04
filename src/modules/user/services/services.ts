// Modules imports
import { User } from '../entities/user';
import IUserRepository from '../infra/repositories/IRepository';
import { CreateRequestDTO } from './createDTO';
import bcrypt from 'bcrypt';


class Service{
	constructor(private userRepository: IUserRepository){}

	async create(data: CreateRequestDTO): Promise<void>{
		const userAlreadyExists = await this.userRepository.findByEmail(data.email);

		if(userAlreadyExists){
			throw new Error('User already exists.');
		}

		data.password = await this.hash(data.password);

		const user = new User(data);
		await this.userRepository.save(user);
	}

	async hash(password: string): Promise<string>{
		const salt = await bcrypt.genSalt(12);
		return await bcrypt.hash(password, salt);
	}
}

export default Service;

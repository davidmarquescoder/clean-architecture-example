// Modules imports
import { User } from '../entities/user';
import IUserRepository from '../infra/repositories/IRepository';
import { CreateRequestDTO } from './createDTO';


class Service{
	constructor(private userRepository: IUserRepository){}

	async create(data: CreateRequestDTO): Promise<void>{
		const userAlreadyExists = await this.userRepository.findByEmail(data.email);

		if(userAlreadyExists){
			throw new Error('User already exists.');
		}

		const user = new User(data);
		await this.userRepository.save(user);
	}
}

export default Service;

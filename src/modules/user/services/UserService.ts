// Modules imports
import { User } from '../entities/user';
import IUserRepository from '../infra/repositories/IUserRepository';
import { CreateUserRequestDTO } from './CreateUserDTO';


class UserService{
	constructor(private userRepository: IUserRepository){}

	async createUser(data: CreateUserRequestDTO): Promise<void>{
		const userAlreadyExists = await this.userRepository.findByEmail(data.email);

		if(userAlreadyExists){
			throw new Error('User already exists.');
		}

		const user = new User(data);
		await this.userRepository.save(user);
	}
}

export default UserService;

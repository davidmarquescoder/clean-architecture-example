// Modules imports
import IUserRepository from '../repositories/IUserRepository';


class UserService{
	constructor(private userRepository: IUserRepository){}

	async createUser(name: string): Promise<void>{
		await this.userRepository.save(name);
	}
}

export default UserService;

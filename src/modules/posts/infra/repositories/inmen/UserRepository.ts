// Modules Imports
import IUserRepository from '../../../repositories/IUserRepository';


class UserRepository implements IUserRepository{
	async save(name: string): Promise<void> {
		console.log(name);
	}
}

export default UserRepository;

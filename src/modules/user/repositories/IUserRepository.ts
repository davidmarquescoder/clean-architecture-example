import { User } from '../entities/user';

// Contrato de Usuário
interface IUserRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
}

export default IUserRepository;

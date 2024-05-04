import { User } from '../../entities/user';

// Contrato de Usuário
interface IRepository {
  findByEmail(email: string): Promise<User | null>
  save(user: User): Promise<void>
}

export default IRepository;

// Contrato de Usuário
interface IUserRepository {
  save(name: string): Promise<void>
}

export default IUserRepository;

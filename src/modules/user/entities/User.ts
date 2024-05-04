import { v4 } from 'uuid';

export class User {
	public readonly id!: string;

	public name!: string;
	public email!: string;
	public password!: string;
	public phone!: string;

	constructor(props: Omit<User, 'id'>, id?: string) {
		// Passando todas as propriedades continas no "props" para o "this"
		Object.assign(this, props);

		if (!id) {
			this.id = v4();
		}
	}
}

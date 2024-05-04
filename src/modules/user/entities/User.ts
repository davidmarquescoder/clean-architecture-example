import { v4 } from 'uuid';

export class User {
	public readonly id!: string;

	public name!: string;
	public email!: string;
	public password!: string;
	public phone!: string;

	constructor(props: Omit<User, 'id'>, id?: string) {
		// Passando todas as propriedades continas no "props" para o "this" -> Object.assign(this, props);
		this.name = props.name;
		this.email = props.email;
		this.password = props.password;
		this.phone = props.phone;

		if (!id) {
			this.id = v4();
		}
	}
}

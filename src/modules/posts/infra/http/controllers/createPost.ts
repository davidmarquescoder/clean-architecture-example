// Modules Imports
import { Request, Response } from 'express';


export default class CreatePost{

	static async NewPost (request: Request, response: Response): Promise<Response> {
		const { title, content } = request.body;

		try {
			return response.json({titulo: title, conteudo: content});
		}

		catch (error) {
			return response.status(500).json({ error: error.message });
		}
	}

}

// Modules Imports
import express from 'express';
import dontenv from 'dotenv';

// Dotenv Config
import cors from 'cors';
dontenv.config();

// Imports Routes
import router from '../../modules/posts/infra/http/routes/user.routes';


class App{

	public server: express.Application;

	constructor(){
		this.server = express();
		this.connection();
		this.middlewares();
		this.routes();
	}

	async connection(){

	}

	middlewares(){
		this.server.use(express.json({limit: '50mb'}));
		this.server.use(express.urlencoded({extended: true, limit: '50mb'}));
		this.server.use(cors({credentials: true, origin: process.env.ORIGIN_URL}));
	}

	routes(){
		this.server.use('/api/v1/users', router);
	}
}

const app = new App().server;
export default app;

import './database';

import './app/services/schedule';
import express from 'express';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());

    // const whitelist = [
    //   'http://viladalila.site',
    //   'https://viladalila.site',
    //   'http://www.viladalila.site',
    //   'https://www.viladalila.site',
    // ];

    // const corsOptions = {
    //   origin(origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error('Not allowed by CORS'));
    //     }
    //   },
    // };

    // this.server.use(cors(corsOptions));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

import { User } from './entity/User';
import { Ongs } from './entity/Ongs';




createConnection().then(async connection => {
  // connection.getRepository(User);
  // connection.getRepository(Ongs);
  
  const app = express();
  app.use(bodyParser.json())
  app.use(cors());
  app.use(routes);
  




  app.listen(3333);

}).catch(error => console.log(error));

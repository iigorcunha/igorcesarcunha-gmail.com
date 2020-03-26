import { Request, Response } from 'express';
import { getRepository, getConnection, createQueryBuilder} from 'typeorm';
import {User} from "../entity/User";

export default {
  async index(req: Request, res: Response) {
    const user = await getRepository(User).find();

    return res.json(user);
  },

  async create (req: Request, res: Response) {
    const data = await req.body;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(data)
      .execute();

    return res.send().status(200);
  }
};
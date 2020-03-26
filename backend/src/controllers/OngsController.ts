import { Request, Response } from 'express';
import crypto from 'crypto';
import { getRepository, getConnection, createQueryBuilder} from 'typeorm';
import { Ongs } from "../entity/Ongs";

export default {
  async index(req: Request, res: Response) {
    const ongs = await getRepository(Ongs).find({ relations: ["incidents"]});

    return res.json(ongs);
  },

  async create (req: Request, res: Response) {
    const { name, email, whatsapp, cidade, uf } = await req.body;

    const id = crypto.randomBytes(4).toString('HEX')

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Ongs)
      .values({
        id,
        name,
        email,
        whatsapp,
        cidade,
        uf
      })
      .execute();

    return res.json({ id });
  }
};
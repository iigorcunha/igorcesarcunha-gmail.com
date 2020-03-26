import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Ongs } from '../entity/Ongs'; 

export default {
  async store(req: Request, res: Response) {
    const { id } = req.body;
    const ongRepository = await getRepository(Ongs)
    const ong = await ongRepository
      .createQueryBuilder("ongs")
      .where("ongs.id = :id", { id: id})
      .getOne()

    if (!ong){
      return res.status(400).json({ error: 'No ONG found with this ID'})
    }

    return res.json({ name: ong.name})
  }
}
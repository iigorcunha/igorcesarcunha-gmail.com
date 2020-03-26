import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Incidents } from '../entity/Incidents';

export default {
  async index (req: Request, res: Response) {
    const ong_id = req.headers.authorization;

    const incident = await getRepository(Incidents).find({ where: { ong_id: ong_id}});

    return res.json(incident)
  }
}
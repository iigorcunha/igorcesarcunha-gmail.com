import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import { Incidents } from "../entity/Incidents";

export default {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;

    const incidentRepository = getRepository(Incidents);

    const count = await incidentRepository.count()

    const incidents = await incidentRepository
      .find({
        skip: ((page - 1) * 5),
        take: (5)
      })
      
    res.header('X-Total-Count', count.toString() ) 
    return res.json(incidents);
  },

  async create (req: Request, res: Response) {
    const { title, description, value } = await req.body;

    const ong_id= req.headers.authorization;

    const data = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Incidents)
      .values({
        title,
        description, 
        value,
        ong_id,
      })
      .execute();
    
    return res.json(data.identifiers);
  },

  async delete (req: Request, res: Response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await getConnection()
      .manager
      .findOne(Incidents, id)

    incident.ong_id  = await getConnection()
      .createQueryBuilder()
      .relation(Incidents, "ong_id")
      .of(incident)
      .loadOne()

    if (incident.ong_id.id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted.'});
    }

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Incidents)
      .where("id = :id", { id: id})
      .execute()
      
    
    return res.status(204).send()
  
  }
};
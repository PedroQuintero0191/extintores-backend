import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Exting } from "../entity/Exting";

export const getExtings = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(Exting).find();
  return res.json(users);
};

export const getExting = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(Exting).findOne(req.params.id);
  return res.json(results);
};

// export const createExting = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const newUser = await getRepository(User).create(req.body);
//   const results = await getRepository(User).save(newUser);
//   return res.json(results);
// };

export const updateExting = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const oneExting = await getRepository(Exting).findOne(req.params.id);
  if (oneExting) {
    getRepository(Exting).merge(oneExting, req.body);
    const results = await getRepository(Exting).save(oneExting);
    return res.json(results);
  }

  return res.json({msg: 'Exting Not found'});
};

// export const deleteExting = async (req: Request, res: Response): Promise<Response> => {
//   const results = await getRepository(User).delete(req.params.id);
//   return res.json(results);
// };
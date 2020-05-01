import {  Match, IMatchSchema } from './match.schema';
import { Request, Response } from 'express';
import { Error } from 'mongoose';

export function getAllMatches(req: Request, res: Response) {
  Match.find((err: Error, matches: IMatchSchema[]) => {
    if (err) res.send(err.message)
    else res.send(matches);
  });
}
export function getMatch() {}
export function addMatch(req: Request, res: Response) {
  const match = new Match(req.body);

  match.save(req.body, (err: Error, match: IMatchSchema) => {
    if (err) res.send(err.message)
    else res.send(match);
  })
}
export function deleteMatch() {}
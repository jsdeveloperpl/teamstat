import {Request, Response, Router} from 'express';
import { wwwRouting } from '../controllers/www.controller';
import { teamstatRouting } from '../apps/teamstat/teamstat.controller';

export const router = Router()
    .use( (req: Request, res: Response, next) => {
        console.log(`Time: ${new Date(Date.now())}: ${req.url}`);
        next();
    })
    .use('/', wwwRouting)
    .use('/teamstat/', teamstatRouting)
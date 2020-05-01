import { Router, Request, Response } from "express";
import { teamstatApiRouting } from "./teamstat-api.controller";
import path from 'path';

class TeamstatApp {
    static init() {

    }

    private static getRouter() {

    }
}

export const teamstatRouting = Router()
    // .use((req, res, next) => {
    //     if (req.url === '/teamstat/') res.redirect(301, '/teamstat');
    //     console.log('redirect!');
    //     next();
    // })
    .get('/', (req: Request, res: Response) => {
        console.log(__dirname);
        console.log(req.url);
        res.sendFile(path.join(__dirname, '..', '..', '/assets', '/teamstat', '/index.html'));
    })
    .use('/api', teamstatApiRouting)

    
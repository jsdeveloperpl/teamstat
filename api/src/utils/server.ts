import express from 'express';
import { router } from './routing';
import path from 'path';
import cors from 'cors';

export class Server {
    static start() {
        const app = express();

        app.use(express.json())
        app.use(cors());
        app.use('/', router);
        app.get('/test', (req, res) => {
            res.send('tew')
        })
        app.use(express.static(path.join(__dirname, '..','/assets', '/teamstat')))

        return {listen: app.listen.bind(app) }
    }
}
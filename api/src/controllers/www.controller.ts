import {Router, Request, Response} from 'express';

export const wwwRouting = Router().get('/', (req: Request, res: Response) => {
    res.send(`
    <head>
        <style>
            body {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: brown;
                font-family: Lato, Helvetica, 'sans-serif';
                text-align: center;
            }

            a {
                text-decoration: none;
                color: wheat;
                font-size: 2rem;
            }
        </style>
    </head>
    <body>  
            <h2>JS developer focusing on Angular and Node.js</h3>
            <a href="mailto:kamil@jsdeveloper.pl">kamil@jsdeveloper.pl</a>
    </body>
    `);
});
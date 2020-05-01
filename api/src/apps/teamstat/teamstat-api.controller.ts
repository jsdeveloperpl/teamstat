import { Router } from "express";
import { getAllMatches, getMatch, addMatch, deleteMatch } from "./controllers/match/match.controller";
import { connect, Error } from "mongoose";

function handleLogin(req, res) {
  const credentials = [
      {login: 'admin', password: 'testtest'},
      {login: 'mszymanski', password: 'WidzewRTS2020'}
  ];

  res.send( {auth: credentials.some(({login, password}) => login === req.body.login && password === req.body.password)})
}

export const teamstatApiRouting = Router({mergeParams: true})
    .get('/matches', getAllMatches)
    .get('/match:id', getMatch)
    .post('/match', addMatch)
    .delete('/match', deleteMatch)

    .post('/login', handleLogin);

const API_URI: string = "mongodb://127.0.0.1:27017/test";

connect(API_URI, (err: Error) => {
    if (err) {
    console.log(err.message);
    } else {
    console.log("Successfully Connected!");
    }
});
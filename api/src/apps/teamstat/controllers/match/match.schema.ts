import { Schema, Document, model } from "mongoose";

export const enum MatchEventType {
  W3 = 'w3',
  CreatedChance = 'chance',
  Goal = 'goal',
  OnTargetShot = 'ontargetShot',
  OffTargetShot = 'offtargetShot'
}

export const MatchEventSchema = new Schema({
  time: {type: Number, required: true},
  type: {type: String, required: true},
  third: {type: Number, required: true},
  team: {type: String, required: true}
});

export const Player = new Schema({
  timePlayed: {type: Number, required: true},
  substitionTime: {type: Number, required: true},
  hasStarted: {type: Boolean, required: true},
  shirtNumber: {type: Number, required: true},
  name: {type: String, required: false}
})

export const Team = new Schema({
  name: {type: String, required: true},
  players: {type: [Player], required: false}
})

export const MatchSchema = new Schema<IMatchSchema>({
    duration: { type: String, required: true },
    homeTeam: {type: Team, required: true},
    awayTeam: {type: Team, required: true},
    date: {type: Date, required: true},
    events: { type: [MatchEventSchema], required: true}
  });

export interface ITeam extends Document {
  name: string;
  players: [];
}

export interface IMatchSchema extends Document {
      duration: string;
      date: Date;
      events: [];
      homeTeam: ITeam;
      awayTeam: ITeam;
}

export const Match = model<IMatchSchema>("Match", MatchSchema);
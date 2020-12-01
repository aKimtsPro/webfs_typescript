import { Competition } from "./../../dist/correct/competition/Competition";
import { TennisMan } from "./../../dist/correct/competition/TennisMan";

let compet: Competition<TennisMan> = new Competition<TennisMan>(); 
compet.participant.push(new TennisMan("", ""));
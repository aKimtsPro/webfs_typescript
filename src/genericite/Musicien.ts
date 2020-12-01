import { Instrument } from "./Instrument";

export class Musicien<I extends Instrument>{

    jouer( instrument: I ){
        console.log("Le musicien joue d'un instrument");
    }

}
import { Competition } from "./Competition";
import { CoureurF1 } from "./CoureurF1";

let compet: Competition<CoureurF1> = new Competition<CoureurF1>();

compet.participant.push( new CoureurF1("popol", "polpolMobile") ); // Or
compet.participant.push( new CoureurF1("lucie", "LucieCabine") );  // Argent
compet.participant.push( new CoureurF1("dominique", "VraiVoitureTM") ); // Bronze 

compet.finish();

console.log("or : " + compet.getWinner().nom);
console.log("argent : " + compet.podium.argent.nom);
console.log("bronze : " + compet.podium.bronze.nom);
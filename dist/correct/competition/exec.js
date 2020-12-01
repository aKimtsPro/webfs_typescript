"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Competition_1 = require("./Competition");
var CoureurF1_1 = require("./CoureurF1");
var compet = new Competition_1.Competition();
compet.participant.push(new CoureurF1_1.CoureurF1("popol", "polpolMobile")); // Or
compet.participant.push(new CoureurF1_1.CoureurF1("lucie", "LucieCabine")); // Argent
compet.participant.push(new CoureurF1_1.CoureurF1("dominique", "VraiVoitureTM")); // Bronze 
compet.finish();
console.log("or : " + compet.getWinner().nom);
console.log("argent : " + compet.podium.argent.nom);
console.log("bronze : " + compet.podium.bronze.nom);

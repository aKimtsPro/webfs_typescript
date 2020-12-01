"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Competition_1 = require("./../../dist/correct/competition/Competition");
var TennisMan_1 = require("./../../dist/correct/competition/TennisMan");
var compet = new Competition_1.Competition();
compet.participant.push(new TennisMan_1.TennisMan("", ""));

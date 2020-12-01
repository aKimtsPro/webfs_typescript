"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { Vehicule, VehiculeARoue as VAR } from './../modules/AllVehicules';
var Moto_1 = require("./../modules/Moto");
var Velo_1 = __importStar(require("./../modules/Velo"));
var a = __importStar(require("./../modules/AllVehicules"));
// Bateau
var b = new a.Bateau("marque", "model", 25644, 56768);
b.seDeplacer();
// Moto
var m = new a.Moto("marque", "model", 25644, "2010", Moto_1.CouleurMoto.BLEU);
console.log("La moto a parcouru : " + m.kmParcouru);
m.seDeplacerDe(5);
console.log("La moto a parcouru : " + m.kmParcouru);
// Voiture
var v = new a.Auto("marque", "model", 25644, "2010", 3);
console.log("La voiture a parcouru : " + v.kmParcouru);
v.seDeplacerDe(10);
console.log("La voiture a parcouru : " + v.kmParcouru);
// module Velo
var velo = new Velo_1.default("", "", 0);
Velo_1.direBonjour();

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedConst = void 0;
var moduleA_1 = require("./moduleA");
var moduleA_2 = require("../../../dist/6_modules/with/moduleA");
var a = moduleA_1.maFunc(moduleA_2.variable, "nom");
var b = a === null ? new moduleA_1.Person("non", "existante") : new moduleA_1.Person(a.nom, "du retour");
exports.exportedConst = b;
console.log(exports.exportedConst);

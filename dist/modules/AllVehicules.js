"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bateau = exports.Moto = void 0;
__exportStar(require("./Vehicule"), exports);
__exportStar(require("./VehiculeARoue"), exports);
var Moto_1 = require("./Moto");
Object.defineProperty(exports, "Moto", { enumerable: true, get: function () { return Moto_1.Moto; } });
var Bateau_1 = require("./Bateau");
Object.defineProperty(exports, "Bateau", { enumerable: true, get: function () { return Bateau_1.Bateau; } });
__exportStar(require("./Voiture"), exports);
// Vehicule
// VehiculeARoue
// Moto
// Bateau
// Auto (-> Voiture)

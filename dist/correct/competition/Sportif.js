"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sportif = void 0;
var Sportif = /** @class */ (function () {
    function Sportif(nom) {
        this.nom = nom;
    }
    Object.defineProperty(Sportif.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (v) {
            this._nom = v;
        },
        enumerable: false,
        configurable: true
    });
    return Sportif;
}());
exports.Sportif = Sportif;

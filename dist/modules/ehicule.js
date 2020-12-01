"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, modele, puissance) {
        this.marque = marque;
        this.modele = modele;
        this.puissance = puissance;
    }
    Object.defineProperty(Vehicule.prototype, "marque", {
        get: function () {
            return this._marque;
        },
        set: function (v) {
            if (v.length >= 5 && v.length <= 20)
                this._marque = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "modele", {
        get: function () {
            return this._modele;
        },
        set: function (v) {
            this._modele = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicule.prototype, "puissance", {
        get: function () {
            return this._puissance;
        },
        set: function (v) {
            if (v >= 0)
                this._puissance = v;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicule;
}());
exports.Vehicule = Vehicule;

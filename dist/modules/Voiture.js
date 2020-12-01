"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var VehiculeARoue_1 = require("./VehiculeARoue");
var Voiture = /** @class */ (function (_super) {
    __extends(Voiture, _super);
    function Voiture(marque, modele, puissance, anneeConstr, nbrPorte) {
        var _this = _super.call(this, marque, modele, puissance, anneeConstr) || this;
        _this.nbrPorte = nbrPorte;
        return _this;
    }
    Object.defineProperty(Voiture.prototype, "nbrPorte", {
        get: function () {
            return this._nbrPorte;
        },
        set: function (v) {
            this._nbrPorte = v;
        },
        enumerable: false,
        configurable: true
    });
    return Voiture;
}(VehiculeARoue_1.VehiculeARoue));
exports.Auto = Voiture;

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
exports.Bateau = exports.FlotteMachine = void 0;
var Vehicule_1 = require("./Vehicule");
var Bateau = /** @class */ (function (_super) {
    __extends(Bateau, _super);
    function Bateau(marque, modele, puissance, superficie) {
        var _this = _super.call(this, marque, modele, puissance) || this;
        _this.superficie = superficie;
        return _this;
    }
    Object.defineProperty(Bateau.prototype, "superficie", {
        get: function () {
            return this._superficie;
        },
        set: function (v) {
            if (v >= 0)
                this._superficie = v;
        },
        enumerable: false,
        configurable: true
    });
    // redefinition
    Bateau.prototype.seDeplacer = function () {
        console.log("ploof");
    };
    return Bateau;
}(Vehicule_1.Vehicule));
exports.FlotteMachine = Bateau;
exports.Bateau = Bateau;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Podium = void 0;
var Podium = /** @class */ (function () {
    function Podium(or, argent, bronze) {
        this._or = or;
        this._argent = argent;
        this._bronze = bronze;
    }
    Object.defineProperty(Podium.prototype, "or", {
        get: function () {
            return this._or;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Podium.prototype, "argent", {
        get: function () {
            return this._argent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Podium.prototype, "bronze", {
        get: function () {
            return this._bronze;
        },
        enumerable: false,
        configurable: true
    });
    return Podium;
}());
exports.Podium = Podium;

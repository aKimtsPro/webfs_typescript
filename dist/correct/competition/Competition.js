"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = void 0;
var Podium_1 = require("./Podium");
var Competition = /** @class */ (function () {
    function Competition() {
        this._participant = [];
        this._finished = false;
    }
    Object.defineProperty(Competition.prototype, "podium", {
        // Le constructeur par défaut est satisfaisant.
        get: function () {
            return this._podium;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "participant", {
        get: function () {
            return this._participant;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "value", {
        set: function (v) {
            this._participant = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "isFinished", {
        get: function () {
            return this._finished;
        },
        enumerable: false,
        configurable: true
    });
    Competition.prototype.finish = function () {
        if (this.participant.length >= 3) {
            this._finished = true;
            this._podium = new Podium_1.Podium(this._participant[0], this._participant[1], this._participant[2]);
        }
    };
    Competition.prototype.getWinner = function () {
        if (this._finished)
            return this._podium.or;
    };
    return Competition;
}());
exports.Competition = Competition;

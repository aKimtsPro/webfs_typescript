"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guitare = void 0;
var Instrument_1 = require("./Instrument");
var Guitare = /** @class */ (function () {
    function Guitare() {
        this.type = Instrument_1.TypeInstrument.CORDE;
        this.son = "blring";
    }
    return Guitare;
}());
exports.Guitare = Guitare;

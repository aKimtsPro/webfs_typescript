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
exports.TennisMan = void 0;
var Sportif_1 = require("./Sportif");
var TennisMan = /** @class */ (function (_super) {
    __extends(TennisMan, _super);
    function TennisMan(nom, terrainFav) {
        var _this = _super.call(this, nom) || this;
        _this.terrainFav = terrainFav;
        return _this;
    }
    Object.defineProperty(TennisMan.prototype, "terrainFav", {
        get: function () {
            return this._terrainFav;
        },
        set: function (v) {
            this._terrainFav = v;
        },
        enumerable: false,
        configurable: true
    });
    return TennisMan;
}(Sportif_1.Sportif));
exports.TennisMan = TennisMan;

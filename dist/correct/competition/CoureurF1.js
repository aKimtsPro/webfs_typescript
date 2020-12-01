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
exports.CoureurF1 = void 0;
var Sportif_1 = require("./Sportif");
var CoureurF1 = /** @class */ (function (_super) {
    __extends(CoureurF1, _super);
    function CoureurF1(nom, marqueVoit) {
        var _this = _super.call(this, nom) || this;
        _this.marqueVoiture = marqueVoit;
        return _this;
    }
    Object.defineProperty(CoureurF1.prototype, "marqueVoiture", {
        get: function () {
            return this._marqueVoiture;
        },
        set: function (v) {
            this._marqueVoiture = v;
        },
        enumerable: false,
        configurable: true
    });
    return CoureurF1;
}(Sportif_1.Sportif));
exports.CoureurF1 = CoureurF1;

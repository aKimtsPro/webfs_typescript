"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guitare_1 = require("./Guitare");
var Instrument_1 = require("./Instrument");
var Musicien_1 = require("./Musicien");
var MusicienCollectionneur_1 = require("./MusicienCollectionneur");
var instru = {
    type: Instrument_1.TypeInstrument.CORDE,
    son: "bling"
};
var musicien = new Musicien_1.Musicien();
musicien.jouer(instru);
var mus2 = new Musicien_1.Musicien();
mus2.jouer(new Guitare_1.Guitare());
var collectionneur = {
    collec: [1, 2, 3],
    echanger: function (c, toExchange) {
        return true;
    }
};
var musCo = new MusicienCollectionneur_1.MusicienCollectionneur();
musCo.echanger(collectionneur, 5);

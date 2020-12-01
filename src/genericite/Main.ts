import { Guitare } from "./Guitare";
import { Instrument, TypeInstrument } from "./Instrument";
import { Musicien } from "./Musicien";
import { MusicienCollectionneur as MusCo } from "./MusicienCollectionneur";


let instru : Instrument = {
    type: TypeInstrument.CORDE,
    son: "bling"
}

let musicien : Musicien<Instrument> = new Musicien<Instrument>();
musicien.jouer( instru );

let mus2 : Musicien<Guitare> = new Musicien<Guitare>();
mus2.jouer( new Guitare() );


let collectionneur: Collectionneur<number> = 
{
    collec: [1,2,3],
    echanger: function(c: Collectionneur<number>, toExchange : number){
        return true;
    }
}

let musCo: MusCo<Instrument, number> = new MusCo<Instrument, number>();
musCo.echanger(collectionneur, 5);
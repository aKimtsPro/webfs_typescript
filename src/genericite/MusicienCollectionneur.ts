import { Instrument } from "./Instrument";
import { Musicien } from "./Musicien";

export class MusicienCollectionneur<I extends Instrument, C> extends Musicien<I> implements Collectionneur<C> {
    
    collec: C[]; // Array<C>
    echanger: (echangeur: Collectionneur<C>, toExchange: C) => boolean;

}
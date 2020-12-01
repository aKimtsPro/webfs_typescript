import { Instrument } from "./Instrument";
import { Musicien } from "./Musicien";
export declare class MusicienCollectionneur<I extends Instrument, C> extends Musicien<I> implements Collectionneur<C> {
    collec: C[];
    echanger: (echangeur: Collectionneur<C>, toExchange: C) => boolean;
}

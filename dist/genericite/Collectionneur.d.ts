interface Collectionneur<C> {
    collec: Array<C>;
    echanger: (echangeur: Collectionneur<C>, toExchange: C) => boolean;
}

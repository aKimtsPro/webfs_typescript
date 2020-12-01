export { Type as TypeInstrument };
declare enum Type {
    VENT = 0,
    CORDE = 1,
    PERCU = 2
}
export interface Instrument {
    type: Type;
    son: string;
}

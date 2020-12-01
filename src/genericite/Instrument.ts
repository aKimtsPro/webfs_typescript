
export { Type as TypeInstrument };

enum Type {
    VENT,
    CORDE,
    PERCU
}

export interface Instrument{
    type: Type;
    son: string;
    //let: number;
}
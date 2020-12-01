export interface Face{
    nbrOreilles: number,
    tailleDeNez: number
} 

export class Tete implements Face{
    nbrOreilles: number;
    tailleDeNez: number;
    couleurCheveux: string;
}

export function maFunc(){
    console.log("ma fonction");
}

const maVar = 5;
type monType = 3|5;

export { maVar, monType as TroisOuCinq, maFunc as maFonction }
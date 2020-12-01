import { Vehicule } from "./Vehicule";

// Le nom de la classe est optionel
export default class Velo extends Vehicule{

    public seDeplacer() {
        throw new Error("Method not implemented.");
    }
    
}

// !!! un seul export default par module
export function direBonjour(){
    console.log("bonjour");
}
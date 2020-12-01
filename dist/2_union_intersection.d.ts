declare type valeurDes = 1 | 2 | 3 | 4 | 5 | 6;
declare function lancerDes(): valeurDes;
declare function creerEcran(pixel: [1920, 1080] | [3840, 2160], nbrPouce: 24 | 25 | 26): {
    pixelisation: [1920, 1080] | [3840, 2160];
    taille: 24 | 25 | 26;
};
declare type union = string | void;
declare function bateau(age: number): union;
declare type intersec = string & number;

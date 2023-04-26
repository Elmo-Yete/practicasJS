const expireCalc = (expireYear,currentYear ) => { 
    if ( expireYear < currentYear === true ) {
        return "Tu producto esta fresco"
    } else {
        return "Tu producto ya caduco"
    }
}

let evalProduct = expireCalc (2020,2023)
console.log (evalProduct)

let mustang = {
    brand: "Ford",
    model: "Mustang",
    year: "1970",
};
let lancer = {
    brand: "Mitsubushi",
    model: "Lancer",
    year: "2012",
};

let searchSpecs = (spec) => {
    if (spec === mustang ){
        return (mustang)
    } else if (spec === lancer) {
        return (lancer)
    }
}

carToKnow = searchSpecs (lancer)
console.log (carToKnow)

let albumA= {
    album: "A night at the opera",
    band: "Queen",
    release: "1975",
};
let albumB= {
    album: "Memento Mori",
    band: "Depeche Mode",
    release: "2023",
};

let searchAlbum = (album) => {
    let currentYear = 2023;
    if (album === albumA ){
        let timePast =(currentYear-albumA.release);
        return (albumA, "Han pasado" +" " +timePast +" " + "años desde que salio el album")
    } else if (album === albumB) {
        let timePast2 =(currentYear-albumB.release);
        return (albumB, "Han pasado" +" " +timePast2 +" " + "años desde que salio el album")
    }
}

albumToKnow = searchAlbum (albumB)
console.log (albumToKnow)
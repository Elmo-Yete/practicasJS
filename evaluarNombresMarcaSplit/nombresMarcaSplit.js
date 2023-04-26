const initialNames = (strName,strLast1,strLast2) => {
    let subStrName = strName.substring (0,1);
    let subStrLast1 = strLast1.substring (0,1);
    let subStrLast2 = strLast2.substring (0,1);
    let nameInCaps =  subStrName.concat(" ", subStrLast1, " ", subStrLast2);
    return nameInCaps
}

let ALG = initialNames ("Antonio" , "Lopez", "Garcia");
console.log (ALG);

const evaluateBrand = (brand) => {
    let brandLenght = brand.length;
    if (brandLenght < 5) {
        return " El nombre de tu marca es facil"
    } else {
        return " El nombre de tu marca es dificil"
    }
}

let brandNameEval = evaluateBrand ("Brand1")
console.log (brandNameEval)

const evaluateWords = (word) => {
    const lenWord= word.length;
    if (lenWord % 2 === 0) {
        let numberSplit = lenWord /2 
        let firstSplit = word.slice (0,numberSplit)
        let secondSplit = word.slice (numberSplit,)
        let fullSplit = firstSplit + secondSplit
        return (fullSplit)
    } else {
        const oddSplit = (lenWord -1) / 2
        const oddSplit2 = oddSplit + 1  
        let nameOdd = word.slice (0,oddSplit)
        let secondOdd = word.slice (oddSplit2,) 
        let fullSplit2= nameOdd + secondOdd
        return (fullSplit2)
    }
}

let namesToEval = evaluateWords ("salida")
console.log (namesToEval)
/*
https://www.halloween.dev/en

Es medianoche en Elm Street y necesitas dormir urgentemente. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.

Tienes una cadena de texto caótica con letras mezcladas. Tu único escape es contar cuántas veces puedes formar la palabra "sheep" (oveja en inglés) antes de que Freddy te atrape en la pesadilla.

Tu misión: Contar cuántas ovejas completas puedes formar con las letras disponibles.

Crea una función countSheep(letters) que:

Reciba un string con letras desordenadas
Cuente cuántas veces se puede formar la palabra "sheep"
Devuelva el número de ovejas completas que puedes contar
Importante: Para formar "sheep" necesitas: s, h, e, e, p (la 'e' aparece 2 veces)

countSheep('sheepxsheepy')
// → 2 (puedes formar "sheep" dos veces)

countSheep('sshhheeeepppp')
// → 2 (s=2, h=3, e=4, p=4 → solo 2 "sheep" completas)

countSheep('hola')
// → 0 (no hay suficientes letras)

countSheep('peesh')
// → 1 (las letras están desordenadas pero están todas)

*/

function countSheep(letters: string): number {
    let lettersCounter = { "s": 0, "h": 0, "e": 0, "p": 0 };
    let countedSheeps = 0;
    const indivualLetters = letters.split("");
    indivualLetters.forEach((letter) => {
        if (letter === "s") {
            lettersCounter["s"]++;
        } else if (letter === "h") {
            lettersCounter["h"]++;
        } else if (letter === "e") {
            lettersCounter["e"]++;
        } else if (letter === "p") {
            lettersCounter["p"]++;
        }
    });
    const flag = lettersCounter["s"];
    for (let i = 0; i < flag; i++) {
        if (lettersCounter["s"] > 0 && lettersCounter["h"] > 0 && lettersCounter["e"] > 1 && lettersCounter["p"] > 0) {
            countedSheeps++;
            lettersCounter["s"]--;
            lettersCounter["h"]--;
            lettersCounter["e"] -= 2;
            lettersCounter["p"]--;
        }
    }
    return countedSheeps;
}
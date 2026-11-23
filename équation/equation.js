let a = prompt("Entrez la valeur de a :");
let b = prompt("Entrez la valeur de b :");
let c = prompt("Entrez la valeur de c :");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    Alert("L'équation a deux solutions réelles : x1 = " + x1 + " et x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    Alert("L'équation a une solution réelle : x = " + x);
    }
    else {
    Alert("L'équation n'a pas de solution réelle.");
}
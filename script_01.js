
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// module: division a / b | test
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
// output(divide(0,2));
function divide(a,b) {

    if (b != 0) {
        // true
        return a / b;
    }else {
        // false
        return "ERROR";
    }
}
// module: multiplication a * b | test
// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b;
}
// module: subtraction a - b | test
// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2,0));
function subtract(a,b) {
    return a - b;
}

// module: addition a + b | test:
// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {
    return a + b;
}

// module: console output | test:
// output("Hello");
// output(2);
function output(outputData) {
    console.log(outputData);
}
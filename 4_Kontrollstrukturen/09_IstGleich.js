"use strict"

// = vs. == vs. ===

// Zuweisung einer Variable
let message = "Hallo Welt!"

// Vergleich mit automatischer Konvertierung der Werte --> in "passendes" True/False
console.log("\nVergleich:")
console.log("true == 1:", true == 1)
console.log("true != 1:", true != 1)

// Strikter Vergleich ohne Konvertierung --> Werttypen müssen zwingend übereinstimmen
console.log("\nStrikert Vergleich:")
console.log("true === 1:", true === 1)
console.log("true !== 1:", true !== 1)

// Problem mit "normalem" Vergleich
console.log("\nProblem mit Vergleich:")
console.log("0" == false)
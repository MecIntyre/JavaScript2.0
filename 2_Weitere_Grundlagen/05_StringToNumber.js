"use strict"
let abc = "3.141"

// String in eine Ganzzahl umwandeln
console.log(parseInt(abc, 10))

// String in eine Kommazahl umwandeln
console.log(parseFloat(abc))

// Achtung beim Rechnen mit Kommazahlen! (Rundungsfehler...)
let result = 50.35 % 6 - 2.35
console.log(result)

// Lösung: Kommazahlen vermeiden!
let result2 = 5035 % 600 - 235
console.log(result2)

// Zahl zu String
let number = 3.141
console.log("" + number)
console.log(number.toExponential())         // Wissenschaftlich exponent, für große Zahlen
console.log(number.toFixed(2))              // gebräuchlichste (wieviele Kommastellen & Rundung)
console.log(number.toPrecision(2))          // Kommastellen ohne RUndung aber mit Exponent
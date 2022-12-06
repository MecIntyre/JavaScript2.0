"use strict"

let greeting = " ---Hallo Welt!--- "

// Die Anzahl der Zeichen in einem String
console.log(greeting.length)

// Ein einzelnes Zeichen abfragen
console.log(greeting.charAt(4))
console.log(greeting.charAt(5))

// Wo findet sich ein Zeichen in einem String
console.log(greeting.indexOf("!"))
console.log(greeting.indexOf("---", 10))

// Gro0buchstaben bzw. Kleinbuchstaben
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// Text ersetzen
console.log(greeting.replace("!", "!!!"))

// Zeichen rechts und links vom String entfernen
console.log(greeting.trim())

// Verändern der definierte Grundvariable
greeting = greeting.trim().replace("!", "!!!")
console.log(greeting)
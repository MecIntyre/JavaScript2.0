"use strict"
/*
Bei einer erneuten Zuweisung der gleichen Variable, wird der Grundwert niemals verändert,
sondern immer eine neue "Kopie" oder Instanz mit der Änderung erstellt, auf die dann im Speicher gezeigt wird.
Die vorhergehende Variable bleibt kurzzeitig im Speicher und wird dann gelöscht.*/

// Strings sind Immutable (unveränderlich)
let greeting = "Hallo Welt"
greeting = greeting + "!"
console.log(greeting)

// Arrays sind Mutable (veränderlich)
let students = ["Max", "Moritz"]
students.push("Joker")
console.log(students)

// Mutable & const...
const students3 = ["Max", "Moritz"]
students2.push("Joker")
console.log("Students20", students2)

// students2 = ["Max", "Moritz"]
"use strict"

/** Mit einem Array könen wir z.B. eine komplette Teilnehmeriste speichern! */
let students = [
    "Max Müller", 
    "Erika Musternann", 
    "Annika Müller", 
    "Max Mustermann"
]

// Was ist der Typ von einem Array?
console.log(typeof students)
console.log(students instanceof Array)

// Wie viele Elemente sind in einem Arry?
console.log("Länge des Arrays: ", students.length)

// Auf ein einzelnes element zugreifen
console.log("Erstes Element: ", students[0])

// Element hinzufügen
students.push("Hans", "Hubertus")
console.log(students)

// Letztes Element entfernen & entgegen nehmen
const lastElement = students.pop()
console.log("lastElement", lastElement)
console.log(students)

// Ein Element überschreiben
students[0] = "Maximilian Müller"
console.log(students)
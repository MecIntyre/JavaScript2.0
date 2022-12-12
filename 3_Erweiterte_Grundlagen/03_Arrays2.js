"use strict"

let students = [
    "Max Müller", 
    "Erika Mustermann", 
    "Annika Müller", 
    "Max Mustermann"
]

// Prüfen ob ein Element im Array vorhanden ist.
console.log("\nElement 'Max Müller' vorhanden?:")
console.log(students.indexOf("Max Müller"))

// Wenn ein Element nicht existiert -> -1!
console.log("\nElement nicht existent:")
console.log(students.indexOf("Max Müller!!"))

// Arrays sortieren
console.log("\nArrays sortieren:")
students.sort()
console.log(students)

// Sortierung umdrehen
console.log("\nSortierung umkehren:")
students.reverse()
console.log(students)

// Wichtig: Sparse Arrays! (Langsam & zu vermeiden, weil unnötige Zwischenräume)
console.log("\nSparse Arrays:")
students[30] = "Joker"
console.log(students)

// Die .splice()-Funktion zum Entfernen von Elementen
console.log("\nMit Splice entfernen:")
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum Hinzufügen von Elementen
console.log("\nMit Splice hinzufügen:")
students.splice(1, 0, "Joker")
console.log(students)

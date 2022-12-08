"use strict"

let students = [
    "Max Müller", 
    "Erika Musternann", 
    "Annika Müller", 
    "Max Mustermann"
]

// Prüfen ob ein Element im Array vorhanden ist.
console.log(students.indexOf("Max Müller"))

// Wenn ein Element nicht existiert -> -1!
console.log(students.indexOf("Max Müller!!"))

// Arrays sortieren
students.sort()
console.log(students)

// Sortierung umdrehen
students.reverse()
console.log(students)

// Wichtig: Sparse Arrays! (Langsam & zu vermeiden, weil unnötige Zwischenräume)
students[30] = "Joker"
console.log(students)

// Die .splice()-Funktion zum Entfernen von Elementen
students.splice(0, 2)
console.log(students)

// Die .splice()-Funktion zum Hinzufügen von Elementen
students.splice(1, 0, "Joker")
console.log(students)

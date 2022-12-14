"use strict"

// Der erste Sprachkus der Sprachschule
let students1 = ["Torsten", "Laura"]

// Der zweite Sprachkurs der Sprachschule
let students2 = ["Tobias", "Anna", "Michelle"]

/*
Aufgabe 1
    Schreibe Code, der prüft, ob ein Teilnehmer in einem Sprachkurs engeschrieben ist.
    Verwende dazu nur eine if-Abfrage, die ein && oder ein || enthält.
    Wichtig: Du musst sowohl die Liste students1 und students2 prüfen!

Beispielaufgabe:
 - Bei student = "Torsten": "Torsten ist eingeschrieben"
 - Bei student = "Felix": "Felix ist nicht eingeschrieben" */

console.log("\nLösung 1:")
let student = "Torsten"

if (students1.indexOf(student) !== -1 || (students2.indexOf(student) !== -1)) {
    console.log(student + " ist eingeschrieben.")
}
else {
    console.log(student + " ist nicht eingeschrieben.")
}
/*
Aufgabe 2
    Bei unserer Sprachschule bewirbt sich ein neuer Teilnehmer namens "Tom".
    Platziere ihn in dem Sprachkurs, der weniger Teilnehmer hat!
    Wichtig: Der Code soll universell funktionieren, also egal ob in Kurs 1 oder Kurs 2 weniger Teilnehmer sind!
    Verwende also eine if-Abfrage, um ihn in genau dem Sprachkurs zu platzieren, der weniger Teilnehmer hat! */

console.log("\nLösung 2:")
let newStudent = "Tom"

if (students1.length < students2.length) {
    students1.push(newStudent)
    console.log(newStudent + " wurde in den Sprachkurs 1 eingeschrieben.")
    console.log("Sprachkurs 1: ", students1)
} else {
    students2.push(newStudent)
    console.log(newStudent + " wurde in den Sprachkurs 2 eingeschrieben.")
    console.log("Sprachkurs 2: ", students2)
}

/*
Aufgabe 3
    Tobias muss seinen Sprachkurs absagen.
    Schreibe Code, der dafür sorgt, dass er aus seiner Liste entfernt wird.
    Wichtig: Auch dieser Code soll universell sein, der gleiche Code soll auch "Torsten" 
    aus der jeweiligen Liste entfernen können!
    Du wirst hierzu also auch eine if-Abfrage benötigen. */

console.log("\nLösung 3:")
let deleteStudent = "Tobias"

let toDelete1 = students1.indexOf(deleteStudent)
if (toDelete1 !== -1) {
    students1.splice(toDelete1, 1)
    console.log(deleteStudent + " wurde aus dem Sprachkurs 1 entfernt.")
    console.log("Sprachkurs 1: ", students1, "\nSprachkurs 2: ", students2)
} 

let toDelete2 = students2.indexOf(deleteStudent)
if (toDelete2 !== -1) {
    students2.splice(toDelete2, 1)
    console.log(deleteStudent + " wurde aus dem Sprachkurs 2 entfernt.")
    console.log("Sprachkurs 1: ", students1, "\nSprachkurs 2: ", students2)
}
/*
Aufgabe 4
    Je mehr Teilnehmer am Sprachkurs teilnehmen, desto weniger soll der Sprachkurs pro Teilnehmer kosten.
    Schreibe Code, der für die Variable "numberOfStudents" ausgubt, wie viel der Sprachkurs kosten soll!

- Bei nur einem Teilnehmer: 40€ / Stunde / Teilnehmer
- Bei 2-5 Teilnehmern: 25€ / Stunde / Teilnehmer
- Bei 6 oder mehr Teilnehmern: 15€ / Stunde / Teilnehmer

Beispielausgabe (bei numberOfStudents = 1: 
    -> "Der Sprachkurs kostet 40 / Stunde / Teilnehmer." 

Beispielausgabe (bei numberOfStudents = 5: 
    -> "Der Sprachkurs kostet 25 / Stunde / Teilnehmer."

Beispielausgabe (bei numberOfStudents = 6: 
    -> "Der Sprachkurs kostet 15 / Stunde / Teilnehmer." 
    
Tipp: Verwende hierzu ein if...else if-Konstrukt! */

console.log("\nLösung 4:")
let numberOfStudents = 5

if (numberOfStudents === 1) {
    console.log("Der Sprachkurs kostet 40 / Stunde / Teilnehmer")
}
else if (numberOfStudents >= 2 && numberOfStudents <= 5) {
    console.log("Der Sprachkurs kostet 25 / Stunde / Teilnehmer")
}
else
    console.log("Der Sprachkurs kostet 15 / Stunde / Teilnehmer")
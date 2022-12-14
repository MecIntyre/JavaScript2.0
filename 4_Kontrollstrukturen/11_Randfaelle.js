"use strict"

/* Randfälle beachten!
Ganzzahl, größer als 0 */

console.log("\nRandfälle:")
let numberOfStudents = 5

if (numberOfStudents === 1) {
    console.log("Der Sprachkurs kostet 40 / Stunde / Teilnehmer")
}
else {
/* 
numberOfStudents ist eine ganze Zahl, größer als 1
numberOfStudents ist eine ganze Zahl, größer gleich 2 */
if (numberOfStudents <= 5) {
    console.log("Der Sprachkurs kostet 25 / Stunde / Teilnehmer")
}
else {
/* 
numberOfStudents ist eine ganze Zahl, größer als 5
numberOfStudents ist eine ganze Zahl, größer gleich 6 */
    console.log("Der Sprachkurs kostet 15 / Stunde / Teilnehmer")
    }
}
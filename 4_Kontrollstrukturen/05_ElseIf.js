"use strict"

let studentCount = 15

if (studentCount < 5) {
    console.log("Es sind noch viele Plätze im Sprachkurs frei!")
}
else if (studentCount < 8) {
    console.log("Es sind noch wenige Plätze im Sprachkurs frei!")
}
else if (studentCount < 10) {
    console.log("Es sind kaum noch Plätze im Sprachkurs frei!")
}
else {
    console.log("Es sind keine Plätze mehr frei!")
}

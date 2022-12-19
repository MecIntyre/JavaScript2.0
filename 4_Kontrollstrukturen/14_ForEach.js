"use strict"

const students = ["Max", "Erika", "Monika"]

/* Normale Schreibweise

for (let i = 0; i < students.length; i++) {
    console.log("i:", i)
    console.log(students[i])
} */

/* Vereinfachte Schreibweise

for (const i in students) {
    console.log("i:", i)
    console.log(students[i])
} */

for (const student of students){
    console.log("Student:", student)
}
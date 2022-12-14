"use strict"
console.log("\nWhile-Schleife:")
let counter1 = 0

while (counter1 < 5) {
    // counter = counter + 1
    counter1++

console.log("Counter1: ", counter1)
}

/* 
Endlosschleife - nicht zu empfehlen...

while (true) {
    console.log("Hallo Endloswelt! :D")
} 


Versteckte Endlosschleife - auch nicht besser...

let students = ["Max"]

while (students.length < 4)
    console.log("Hallo Endloswelt! :D")
*/

console.log("\nDo-While-Schleife:")
let counter2 = 0
do {
    counter2++
    console.log("Counter2: ", counter2)
} while (counter2 < 5)
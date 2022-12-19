"use strict"

for (let i = 0; i <= 10; i++){
    if (i === 7) {
        continue            // Überspringt die 7 und setzt die Schleife fort
    }
    
    if (i === 9) {          // Bricht die Schleife bei 9 komplett ab
        break
    }

    console.log("i:", i)
}
/* Zuerst erstellen wir ein paar Variablen und was exakt passiert, ist noch nicht wichtig.
Das einzige was wichtig ist, dass wir hier das aktuelle Datum abfragen und Teile davon in Variablen schreiben. */

// Tag im Monat
let dayOfMonth = (new Date()).getDate()

// Der Name des altuellen Monats
let monthName = (new Date()).toLocaleString(["de", "en"], {month: "long"})

// Das aktuelle Jahr (Schreibweise 1)
let year1 = (new Date()).getFullYear()

// Das aktuelle Jahr (Schreibweise 2)
let year2 = (new Date()).toLocaleString(["de", "en"], {year: "numeric"})

/* AUfgabe:
1. Um was für einen Typ handelt es sich bei der Variable "dayOfMonth", sowie "monthName"? Verwende dazu den "typeof-Operator"!
2. Warum klappt "year1 + 5", aber "year2 + 5" liefert eine andere Ausgabe? Wie kann der typeof-Operator dir dabei helfen?
3. Erstelle eine Datumsausgabe. Beispielsweise sollte am 20. August 2020 folgender Text über ein console.log ausgegeben werden:
   >> Heute ist der 20. August 2020
   Verwende dazu den "+"-Operator.
   Bedenke, dass du mehrere Operatoren hintereinander hängen darfst:
   >> console.log("a" + "a" + "c") => Gibt "abc" aus */

/* Passe den Code hier drunter an!
   Aufgabe 1*/
console.log(dayOfMonth)
console.log(typeof dayOfMonth)
console.log(monthName)
console.log(typeof monthName)
console.log(year1)
console.log(typeof year1)
console.log(year2)
console.log(typeof year2)

console.log("------------------")
// Aufgabe 2
/* Year1 = Tnteger
   Year2 = String --> Addition nicht möglich */
console.log(year1 + 5)
console.log(year2 + 5)

console.log("------------------")
// Aufgabe 3
console.log(dayOfMonth + ". " + monthName + " " + year1)
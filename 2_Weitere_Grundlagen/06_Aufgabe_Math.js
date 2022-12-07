"use strict"
/* Aufgabe 1:

Für eine Tankstelle soll eine automatische Rückgeld-Ausgabe implementiert werden.
Für dieses Beispiel soll ein Betrag von 15,37€ zurückgegeben werden.

Wandle zuerst den Beitrag in die englische Schreibweise um (15.37).
Ersetze dazu mit Hilfe von .replace() das Komma durch einen Punkt.

Lese anschließend den String mit Hilfe der parseFloat()-Funktion ein und rechte ihn in Cent um.

Gebe dann aus, mit welchen Münzen dieser Betrag bezahlt werden kann.
Der Einfachheit halber wird dieser Betrag ausschließlich mit Münzen bezahlt (vereinfacht den Code etwas).

Kombiniere dazu geschickt den Modulo, Rundungsfunktionen sowie ggf. den Rest.
Versuche zuerst große Münzen auszugeben!

Tipp:
Rechne den Betrag a besten zuerst in Cents um, sonst treten leicht Rundungsfehler auf, 
die das Programm unnötig kompliziert machen!

Natürlich soll das Programm so geschrieben werden, dass jeder beliebige Beitrag zurückgegeben werden kann.

Beispielausgabe:
 - 7x 2€ Münze
 - 1x 1€ Münze
 - 0x 50 Cent Münze
 - 1x 20 Cent Münze
 - 1x 10 Cent Münze
 - 1x 5 Cent Münze
 - 1x 2 Cent Münze
 - 0x 2 Cent Münze */

console.log("Lösung 1: \n")
let amountStr = "15,37"



/* Aufgabe 2:
 
 In Amerika ist es üblich, in Restaurants ca. 15-20% Trinkgeld zu geben.
 Schreibe ein Programm, welches ca 15-20 Trinkgeld auf eine Restaurant Rechnung aufschlägt.

 Versuche, dass der Betrag, der insgesamt bezahlt wird, möglichst nicht zu krumm ist.
 Kombiniere dazu geschickt Rundungsfunktionen, Divisionen oder Multiplikationen.

 Zudem soll eine Ausgabe erfolgen, bei dem der Gesamtbetrag mit 2 Nachkommastellen ausgegeben wird
 Beispiel: "Der Gesamtbetrag beträgt 20.00$"

 - Beispiel: Rechnungsbetrag 17.00$  -->  Der Gesamtbetrag beträgt 20.00$
 - Beispiel: Rechnungsbetrag 16.50$  -->  Der Gesamtbetrag beträgt 20.00$
 - Beispiel: Rechnungsbetrag 10.00$  -->  Der Gesamtbetrag beträgt 12.50$

 Das Programm muss nicht perfekt sein. Es reicht, wenn es ungefähr funktioniert. */

console.log("Lösung 2: \n")

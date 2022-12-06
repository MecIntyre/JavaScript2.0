"use strict"

let shopping = "    Apfel, Pfirsich, +++Avocado, Mango   "

/* 
Bei einer Einkaufsliste haben sich ein paar Fehler eingeschichen
Unsere Texterkennung des Scans hat ein paar Leerzeichen zu viel erkannt,
sowie ein paar Plus-Zeichen eingelesen, die im Original gar nicht existieren.
Das Möchten wir korrigieren!

Aufgabe 1:  Entferne die Leerzeichen links und rechts und schreibe das Ergebnis zurück
            in die Variable Shopping
            
Aufgabe 2:  Finde die Position der drei Plus-Zeichen und speichere diese in einer Variable

Aufgabe 3:  Schneide die 3 Plus-Zeichen aus und gebe das Ergebnis mit einem console.log aus.
            Verwende dazu einmal die substr-Funktion und einmal die slice-Funktion.
            
Es soll ausgegeben werden: "Apfel, Pfirsich, Avocado, Mango"
Tipp:   Du wirst hierzu 2 Aufrufe der jeweiligen Funktionen benötigen - 
        einmal bis hin zu den Plus-Zeichen und einmal für das Stück danach!

AUfgabe 4:  Schneide die 3 Plus-Zeichen aus und verwende dazu die replace-Funktion!

Aufgabe 5:  Jetzt soll die Shopping-Liste ausgegeben werden.
            Wandle die Liste in folgende Schreibweise um.
            Platziere auch die 2 Striche über & unter der Auflistung und verwende
            dazu die repeat-Funktion!
            
            -----------------
            Einkaufsliste:
             - Apfel
             - Pfirsich
             - Avocado
             - Mango
             ----------------
             
Tipp:   Du kannst z.B. mit Hilfe der replace-Funktion immer nur ein Komma, 
        in einem Zeilenumbruch inklusive Bindestrich umwandeln.
        
        Jetzt hier ist es vollkommen okay, wenn du die replace-Funktion mehrfach
        hintereinander aufrufst, bis alle Kommas umgewandelt wurden:
        >> shopping.replace(...).replace(...).replace(...)
        
        Später lernst du hierfür auch noch eine "elegantere" Methode kennen.
        
        Du darfst wahlweise alles in einem console.log-Aufruf ausgeben oder
        auch mehrere console.log-Aufrufe verwenden. */

// Lösung zu Aufgabe 1:
shopping = shopping.trim() 
console.log(shopping)

// Lösung zu Aufgabe 2:
let plus
plus = shopping.indexOf("+++")
console.log(plus)

// Lösung zu Aufgabe 3:
console.log(shopping.slice(17, 20))
console.log(shopping.substr(17, 3))

// Lösung zu Aufgabe 4:
shopping = shopping.replace("+++", "")
console.log(shopping)

// Lösung zu Aufgabe 5:
console.log("-".repeat(20))
console.log("- " + shopping.replace(",", "\n").replace("Pfirsich", "").replace("Avocado", "").replace("Mango", ""))
console.log("- " + shopping.replace(",", "\n").replace("Apfel", "").replace("Avocado", "").replace("Mango", ""))
console.log("- " + shopping.replace(",", "\n").replace("Apfel", "").replace("Pfirsich", "").replace("Mango", ""))
console.log("- " + shopping.replace(",", "\n").replace("Apfel", "").replace("Pfirsich", "").replace("Avocado", ""))
console.log("-".repeat(20))

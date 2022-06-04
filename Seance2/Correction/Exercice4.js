console.log("Exercice 4");

var etudiants = [
    { name: "sarah", note: undefined },
    { name: "monya", note: 7 },
    { name: "carlos", note: 13 },
    { name: "fadhel", note: 18 },
];

1// Enlver undefined
etudiants = etudiants.filter((e) => e?.note) // filtre = true = bch y5alihelek ( undefined mahich true )
2// Trier
etudiants = etudiants.sort((a, b) => b.note - a.note)
3// te7seb Moyene
const moy = etudiants.reduce((T, v) => T + v.note, 0) / etudiants.length
4// Affichi
// Methode1
etudiants.map((e) => ({ ...e, mention: v.note > moy ? "bien" : "passable" }))
// Methode 2
const m1 = (n) => n > moy ? "bien" : "passable"
const callback = (e) => ({ ...e, mention: m1(e.note) });
etudiants.map(callback)

console.log('Exercice 2');

// "aaa|bbb-cccc|dddd-eeee|fffff"
// aa.split('-')
// Array(3) [ "aaa|bbb", "cccc|dddd", "eeee|fffff" ]

// aa.split('-').join('')
// "aaa|bbbcccc|ddddeeee|fffff"
// aa.split('-').join('').split('|')
// Array(4) [ "aaa", "bbbcccc", "ddddeeee", "fffff" ]

// aa.split('-')
// Array(3) [ "aaa|bbb", "cccc|dddd", "eeee|fffff" ]

// aa.split('-').map(e=>e.split('|'))
// ​
// 0: Array [ "aaa", "bbb" ]
// ​
// 1: Array [ "cccc", "dddd" ]
// ​
// 2: Array [ "eeee", "fffff" ]

const resultat = "aaa|bbb-cccc|dddd-eeee|fffff"
    .split('-')
    .map(e => e?.split('|'));



// Methode GDIMA 
// var listafergha = [];
// resultat.forEach((e) =>
// {
//     listafergha = [...listafergha, ...e]
// });

// Methode 2
const majmou3a = resultat.reduce((initial, e) => [...initial, ...e], []);
// console.log(majmou3a);

// Correction
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi';
const lespersonnes = str1.split('-'); // [ "ahmed&ferah" ,"moez&saadi"...etc ];
const firsnames_lastnames = lespersonnes.map((person) =>
{ // ahmed&ferah MARRA moez&saadi ..etc
    const x1 = person.split('&') // ["ahmed","ferah"] 
    return { firsname: x1[0], lastname: x1[1] }

});
console.log(firsnames_lastnames);

const firsnames_lastnames_breduce1 = str1.split('-').reduce((T, v) =>
{
    const x1 = v.split('&') // ["ahmed","ferah"] 
    return [...T, { firsname: x1[0], lastname: x1[1] }]

}, [])
const firsnames_lastnames_breduce2 = str1
    .split('-')
    .reduce((T, v) => [...T, { firsname: v.split('&')[0], lastname: v.split('&')[1] }], [])

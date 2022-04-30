const LISTA = [
    { fistname: 'monji', lastname: "sala7" },
    { fistname: 'lam3i', lastname: "gaddour" },
    { fistname: 'fadhel', lastname: "mounir" },
];
// Methode 1
LISTA.map((e) =>
{
    return { ...e, fullName: `${ e.fistname } ${ e.lastname }` }
});
// Methode 2 
LISTA.map((e) => ({ ...e, fullName: `${ e.fistname } ${ e.lastname }` }));
// Methode 3
LISTA
    .map(({ fistname, lastname }) =>
        ({ fistname, lastname, fullName: `${ fistname } ${ lastname }` }));


const LISTA2 = [
    { fistname: 'monji', lastname: "sala7", age: 36 },
    { fistname: 'lam3i', lastname: "gaddour", age: 25 },
    { fistname: 'fadhel', lastname: "mounir", age: 14 },
];

const mineur = LISTA2.filter(({ age }) => age < 18);
const majeur = LISTA2.filter((e) => e.age > 18);

// .Reduce 
// Methode 1
const liista = [1, 2, 3, 4, 5, 6];
liista.reduce((t, e) =>
{
    return t + e;
}, 0);
// Methode 2
liista.reduce((t, e) => t + e, 0);
// Ex1 : impair 
// Methode 1
liista.reduce((t, e) =>
{
    if (e % 2 === 0) {
        return t
    } else {
        return t + e;
    }
}, 0);
// Methode 2
liista.reduce((t, e) =>
{
    return e % 2 === 0 ? t : t + e;
}, 0);
// // Methode 3
liista.reduce((t, e) =>
    e % 2 === 0
        ? t
        : t + e
    , 0);
// Methode 4
liista
    .filter((e) => e % 2 !== 0)
    .reduce((t, e) => t + e
        , 0);









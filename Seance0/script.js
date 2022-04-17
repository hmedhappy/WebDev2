
// const nom = "MONJI";
const nom2 = "GADDOUR";
const la9ab = "WELDEL7AJ";

const monji = function PrintFullName(ellitheb)
{
    console.log({ ellitheb });
};

const fat7i = (nom, prenom) => `${ prenom } ${ nom }`

const resulat = fat7i;



//  Data structures 
const data = { name: "BO7MID" };
const adresse = {
    rue: "Monji SLim",
    bloc: {
        etage: 1,
        section: 3
    }
}
// console.log({ result: { ...data, ...adresse } });

const lisstaa = [1, 2, 3, 4, 5, 6];
const lisatttao5ra = ["a", "b", 'c', "d"];

// console.log([...lisstaa, ...lisatttao5ra]);

// Destructurirng
//  OBJECT
const Donne = {
    nom: "Monji",
    prenom: "Galel",
    age: 34,
    adressee: {
        etage: "3"
    }
}

const { nom, age: hajao5ra, adressee: { etage } } = Donne;

// console.log(hajao5ra);

// ARRAY
const lissst = ["a", "b", "c", "d"];

const [, , esm] = lissst;

// console.log({ esm });

const parcour = () =>
{
    return ["a", "b", "c", "d"]
};

const [, , loula, thenya] = parcour();

// console.log({ loula });

// Array Methods ;
let fergha = [1, 2];

fergha.push("elvaribelelibch nzidha"); // classic
fergha = [...fergha, "jdida"];

// add from start  // classic
fergha.unshift("elvaribelelibch nzidha");
// modern
fergha = ["jdida", ...fergha];

// classic
fergha.shift() // tna7i louleni
// console.log({ fergha });

// tna7i el ka3ba le5ra
fergha.pop();

// console.log([1, 2, 3, 4, 5].reverse());

const ages = [
    { age: 20 },
    { age: 23 },
    { age: 35 },
    { age: 55 },
];
// .some & .every 
console.log(ages.every((element) =>
{
    return element.age > 18
}));

// .replace
const varrr2 = 'ahmrd';
// console.log({ varrr2: varrr2.replace("r", "e") });


// ARray Methods
const dattaa = [
    { firstName: "fadhila", lastName: "benfoulen" },
    { firstName: "3abbes", lastName: "benfalten" },
    { firstName: "7ssouna", lastName: "benfalten" },
    { firstName: "lam3i", lastName: "foulen" },
];

const variablejdida = dattaa.map((e) =>
{
    return { ...e, fullName: `${ e.firstName } ${ e.lastName }` }
});
// console.log(variablejdida);

// .filter
const res = ages.filter((e) =>
{
    return e?.age >= 30;
});
console.log(res);









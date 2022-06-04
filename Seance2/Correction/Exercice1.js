console.log("SCRIPT yemchi");



const MineurMajeur = (kaparametre) => kaparametre.map((e) =>
{
    // Methode 1
    const condition = e?.age >= 18
        ? ("majeur")
        : "mineur";
    // Methode 2
    var condition1 = "";
    if (e?.age >= 18) {
        condition1 = "majeur"
    } else {
        condition1 = "mineur"
    }
    return { ...e, status: condition }

})



const resulat = MineurMajeur([
    { name: "MONCEF", age: 13 },
    { name: "BAHIJA", age: 23 },
    { name: "ALA", age: 18 },
]);
console.log(resulat);
// Function Types

// function MineurMajeur(params)
// {

// }

// const MineurMajeur = function name(params)
// {

// }

// const MineurMajeur = function (params)
// {


console.log("Exercice 3");



const MoodDetect = (kaparametre) => kaparametre.map((e) =>
{
    // Methode 1
    const condition = e?.comment.includes('<3')
        ? "heureux"
        : e?.comment.includes(':(')
            ? "trise"
            : "neutre";
    // Methode 2
    var condition1 = "";
    if (e?.comment.includes('<3')) {
        condition1 = "heureux"
    } else if (e?.comment.includes(':(')) {
        condition1 = "trise"
    } else {
        condition1 = "neutre"
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


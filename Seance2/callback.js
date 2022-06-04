
const fn1 = (n, callback) =>
{
    return callback(n + 1)
};



const res = fn1(7, (resultat) =>
{
    console.log({ resultat });
});

const tjibli_todo_bil_ID = (id, callback) =>
{
    fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`)
        .then(response => response.json())
        .then(json => callback(json))
};

const tetelhe_bil_affichage_mta_e_resulatat = (res) =>
{
    console.log(res);
}

tjiblitodobilID(2, tetelhe_bil_affichage_mta_e_resulatat)

// promise1("bo7mid", (reponse) =>
// {
//     console.log(reponse);
// })

const tjibli_todo_bil_IDD = () =>
{
    const id = document.getElementById('nombre').value;
    fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`)
        .then(response => response.json())
        .then(json => console.log(json))
};

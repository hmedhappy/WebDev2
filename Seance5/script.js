// alert('marhbe');

const users = [
    { firsname: "wajdi", last: "boumbarek" },
    { firsname: "lam3i", last: "balma" },
    { firsname: "badis", last: "menzah6" },
]


const getTextByTimePassed = (firstname, callback) =>
{

    setTimeout(() =>
    {
        // njibou mi lbase donne 
        // el user elli 3andou firsname
        const user = users.find((e) => e.firsname === firstname);
        callback(user);
    }, 2000)

}

const getTodoById = (id, callback) =>
{
    fetch(`https://jsonplaceholder.typicode.com/todos/${ id }`)
        .then((res) => res.json())
        .then(result => callback(result))
}

const affichili = () =>
{
    const id = document.querySelector('#id').value
    const p = document.querySelector('#title')
    getTodoById(id, (result) =>
    {
        p.innerText = result.title
    })
}

(async () =>
{
    // const list = document.querySelector('#list')

    // console.log("hello");

    // getTodoById("3", (result) =>
    // {
    //     console.log(result);
    // })



    // getTextByTimePassed("ons", (valeurderetour) =>
    // {
    //     // DFNKSJDHFKJSNDKJ
    //     // console.log(valeurderetour);

    // })

})()




// console.log(valuer);



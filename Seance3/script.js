const list = document.querySelector('.list');
console.log({ list });

var students = [
    { id: "1", firstame: "sala7", lastname: "ferah" },
    { id: "2", firstame: "monji", lastname: "ferah" },
    { id: "3", firstame: "abdekrim", lastname: "ferah" },
    { id: "4", firstame: "abdellah", lastname: "ferah" },
    { id: "5", firstame: "gargoubi", lastname: "ferah" },
]



const abbiliyama = () =>
{
    list.innerHTML = ''
    students.forEach((e) =>
    {
        list.innerHTML += ` 
        <li style="display:flex;align-items:center;gap:50px"> 
            <p> id :${ e.id } |${ e.firstame }  </p> 
            <button onclick='suppmrim(${ e.id })'> FAS5INI </button> 
            <button onclick='update(${ e.id })'> BADLINI </button> 
        </li> `
    })
}
abbiliyama()

const suppmrim = (id) =>
{

    students = students.filter(e => e.id != id)
    abbiliyama()

}

const form = document.querySelector('form')

const update = (id) =>
{
    // 7atina jsute le valuer mta el nzelt 3leha fil input
    const input = document.querySelector('#name')
    const nameSelected = students.find((e) => e.id == id)
    input.value = nameSelected.firstame;

    // 7adharna el onclick mta el button update ( ellibjnab el input )
    const button = document.querySelector('#button')
    button.onclick = () =>
    {   // update ll list KAHAW MAGHIR AFFICHAGE
        students = students.map((e) => ({ ...e, firstame: e.id == id ? input.value : e.firstame }))
        // TABDIL AFFICHAGE
        abbiliyama()
        // FASARLI EL VALUER INPUT LE9DIMA
        input.value = ""
    }
}


const prevent = (event) =>
{
    console.log('SUBMITED');
    event.preventDefault()
}
const handleChange = (event) =>
{
    console.log(event.target.value)
}
const handleClick = () =>
{
    const value = document.querySelector("#name").value;
    students.push({ firstame: value })
    abbiliyama()
    console.log({ students });
}
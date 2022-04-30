
const handleChange = (event) =>
{
    document.getElementById('name').innerText = event.target.value;

    // console.log(event.target.value);
    // event.target.value.includes("ahmed") ?
    //     alert('VIRUS !!!!')
    //     : console.log();

}

























const add = () =>
{
    const value = document.getElementById('valuuee');
    const list = document.getElementById("list"); ``

    list.innerHTML += `<li> ${ value.value } </li>`
}

// const abg = {}
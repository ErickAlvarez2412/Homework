// let div = document.querySelector("#div1");

// function prueba (){
//     console.log('Prueba -->')
// div.innerHTML = "Hola mundo, ¿Que haces?";
// div.style.background = "grey";
// div.style.border = "30px";
// div.style.color = "white";

// }

// prueba();

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(response =>{
    console.log(response[3].name)
})



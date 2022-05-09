document.body.innerHTML = `<h1><i class="fa-solid fa-paw"></i> Welcome to Pokemon World <i class="fa-solid fa-paw"></i></h1>
<section id="sec"></section`

async function getPokemons() {
    try {
        const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50")
        const pokemonjs = await pokemon.json();
        console.log(pokemonjs)
        const data = pokemonjs.results;
        console.log(data);
        data.map((ele) => {
            getPoki(ele.url)
        })
    }
    catch (error) {
        console.log(error);
    }
}
async function getPoki(url) {
    try {
        const poki = await fetch(url)
        const pokijs = await poki.json();
        console.log(pokijs);
        console.log("Id : " + pokijs.id)
        console.log("Name : " + pokijs.name)
        console.log("Ability : " + pokijs.abilities[0].ability.name)
        console.log("Moves : " + pokijs.moves[0].move.name)
        console.log("Pic : " + pokijs.sprites.front_shiny)
        createPoki(pokijs)
    }
    catch (error) {
        console.log(error)
    }
}
function createPoki(pokijs) {
    sec.innerHTML += `
     <div class="container">
     <img src=${pokijs.sprites.front_shiny} class="poki">
    <div class="info">
    <h3 class="poki-id">Id : <span>${pokijs.id}</span></h3>
    <p>Name : <span>${pokijs.name.charAt(0).toUpperCase() + pokijs.name.substring(1, pokijs.name.length)}</span></p>
    <p>Abilities : <span>${pokijs.abilities[0].ability.name},${pokijs.abilities[1].ability.name}</span></p>
    <p>Moves : <span>${pokijs.moves[0].move.name},${pokijs.moves[1].move.name}</span></p>
    <p>Weight : <span>${pokijs.weight}<span></p>
    </div>
    </div>
     `
}
getPokemons();
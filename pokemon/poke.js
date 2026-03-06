const pokemon = (async () => {

    const https = require('https')

    const getRandomPokemon = async => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
    return new Promise((resolve, reject) => {
        const o = https.get(url,response => {
         let body = ''
         response.on('data', data => body += data.toString())
         response.on('end', () => resolve(JSON.parse(body)))
        }).on('error',reject)
    })
}

//get a random pokemon
const json = await getRandomPokemon()

//create a pokemon object
const pokemon = {
    name: json.name,
    sprite: json.sprites.front_default
}

const renderPokemon = async pokemon => {
    //get the div
      const pokemonElement =  document.querySelector('#pokemon')
      //create the image
        const img = document.createElement('img')
        img.src = pokemon.source
        img.alt = pokemon.name
        //append the image to the div
        pokemonElement.appendChild(img)    
}

//render the pokemon object
renderPokemon(pokemon)
})()
(async () => {

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

const renderPokemon = async pokemon => {
    //get the div
      const pokemonElement =  document.querySelector('#pokemon')
      //create the image
        const img = document.createElement('img')
        img.src = pokemon.sprites.front_default
        img.alt = pokemon.name
        //append the image to the div
        pokemonElement.appendChild(img)    
}

//render the pokemon object
renderPokemon(json)
})()
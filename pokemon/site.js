        (async () => {

        try {
            //gets the information for a randomly selected pokemon
        const getRandomPokemon = async => { 
        const randomPokemon = fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150))
            .then(response => response.json())
        return randomPokemon
        }

        const renderPokemon = target => {
            //picks the div element
            const div = document.querySelector('#pokemon')
            //creates an img element and sets image to the sprite
            const img = document.createElement('img')
            img.src = pokemon.sprites.front_default
            img.alt = pokemon.name
            //creates a verifying p element and sets the text to the name
            const p = document.createElement('p')
            p.innerHTML = pokemon.name
            //assigning the img and p element to the div
            div.appendChild(img) 
            div.appendChild(p) 
        }

        //gets the information from getRandomPokemon
       pokemon = await getRandomPokemon()
       //renders the pokemon selected
       renderPokemon(pokemon)
    } catch (error) {
        console.log(error)
    }
    
    })()
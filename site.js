const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

const messages = ['Good Morning! Welcome to My Page', 'Good Afternoon! Welcome to My Page', 'Good Evening! Welcome to My Page', 'Welcome to My Page']
let i = 3

if(isMorning === true) {i=0}
else if(isAfternoon === true) {i=1}
else  {i=2}

const list = document.querySelector('#welcome')

const h2 = document.createElement('h2')
list.append(h2)

h2.innerHTML = messages[i]

//local storage
const key = "It's a secret to everybody."
const message = "Legend of Zelda? I have no clue"

localStorage.setItem(key, JSON.stringify(message))
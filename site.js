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


//rotating photo
const urls = [
    'images/christmas.jpg',
    'images/hamilton.jpg',
    'images/turkeytrot.jpg',
    'images/forensics.jpg',
    'images/sheep.jpg'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}
const prev = document.getElementById('prev')
const next = document.getElementById('next')

next.addEventListener('click', () => {currentImage = currentImage + 1
    showImages()})
prev.addEventListener('click', () => {currentImage = currentImage -1
    showImages()})



setInterval(() => {
    currentImage = currentImage + 1
    showImages()
}, 5000)

showImages()

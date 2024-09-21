let firstName = "Faris" 
let greeting = "Hi, My name is "

let welcomeEL = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")

welcomeEL.innerText = greeting + firstName

welcomeEL.innerText += " 👋"

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
    console.log(count)
}



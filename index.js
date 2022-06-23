// Code goes here

// Adding EventListeners to the pop up window
let checkOutBtn = document.querySelector('.final .check-out')
let proceedBtn = document.querySelector('.proceed')
let backBtn = document.querySelector('.go-back')
let overlay = document.querySelector('.overlay')

// Define the popup window
const checkOutWindow = document.querySelector('.popup-window')

// open the popup window
checkOutBtn.addEventListener('click', (e) => {    
    openPopupWindow(checkOutWindow)
})

// close the popup window
backBtn.addEventListener('click', (e) => {
    closePopupWindow(checkOutWindow)
})

// add eventListener to the outward overlay to close the popup window
overlay.addEventListener('click', (e) => {
    closePopupWindow(checkOutWindow)
})

// Opening function
function openPopupWindow(window) {
    if (window === null) {
        return
    } else {
        window.classList.add('active')
        overlay.classList.add('active') 
    }   
}

// Closing function
function closePopupWindow(window) {
    if (window === null) {
        return
    } else {
        window.classList.remove('active')
        overlay.classList.remove('active') 
    } 
}

// Drop-down menu functions
// Definitions
let list = document.querySelector('.list')
let dropDownBtn = document.querySelector('.drop-down')

fetch('http://localhost:3000/materials')
.then(res => res.json())
.then(database => {
    for (let material of database) {
        let li = document.createElement('li')
        li.classList = 'add-button'
        li.id = material.id
        li.textContent = material.name
        list.appendChild(li)
    }
})

list.style.display = 'none'
// adding the listener
dropDownBtn.addEventListener('click', (e) => {
    if (list.style.display = 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
})









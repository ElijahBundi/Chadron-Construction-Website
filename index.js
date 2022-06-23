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
let dropDown = document.querySelector('.drop-down')
let dropDownMenu = document.querySelector('.drop-down-menu')
let image = document.querySelector('img#poster')
let trHeading = document.querySelector('.heading')
let finalList = document.querySelector('.final-list')

fetch('http://localhost:3000/materials')
.then(res => res.json())
.then(database => {
    for (let material of database) {
        let li = document.createElement('li')
        let li2 = document.createElement('li')
        li.classList = 'add-button'
        li.id = material.id
        li.textContent = material.name
        list.appendChild(li)
        li.addEventListener('click', (e) => {
            image.src = material.image
            li2.textContent = material.name
            finalList.appendChild(li2)
        })     
         
    }
    
})

// open the popup window
dropDown.addEventListener('click', (e) => {    
    openPopupWindow(dropDownMenu)
})
overlay.addEventListener('click', (e) => {
    closePopupWindow(dropDownMenu)
})

// let listLi = document.querySelectorAll('.list li')
// console.log(listLi)

// listLi.forEach(li => {
//     li.addEventListener('click', (e) => {
        
//     })
// })








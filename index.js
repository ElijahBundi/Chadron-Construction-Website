// Code goes here

// ADDING EVENTLISTENERS TO POPUP WINDOWS

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



// DROP-DOWN MENU FUNCTIONS

// Definitions
let list = document.querySelector('.list')
let dropDown = document.querySelector('.drop-down')
let dropDownMenu = document.querySelector('.drop-down-menu')
let image = document.querySelector('img#poster')
let trHeading = document.querySelector('.heading')
let finalList = document.querySelector('.final-list')

// Creating a table for the gotten elements

let trHeader = document.createElement('tr')    
let th1 = document.createElement('th')
let th2 = document.createElement('th')
let th3 = document.createElement('th')
let th4 = document.createElement('th')
th1.innerText = 'MATERIAL'
th2.innerText = 'QTY'
th3.innerText = 'COST'
th4.innerText = 'TOTAL'

trHeader.appendChild(th1)
trHeader.appendChild(th2)
trHeader.appendChild(th3)
trHeader.appendChild(th4)

finalList.appendChild(trHeader)
console.log(finalList)

// Table appending function
function createTable(matName, qty, cost, total) {

    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    td4.className = 'bold'
    td1.innerText = matName
    td2.innerText = `${qty} pcs`
    td3.innerText = `Ksh ${cost}`
    td4.innerText = `Ksh ${total}`

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    finalList.appendChild(tr)
    
}


fetch('http://localhost:3000/materials')
.then(res => res.json())
.then(database => {
    for (let material of database) {
        let li = document.createElement('li')
        // let li2 = document.createElement('li')
        li.classList = 'add-button'
        li.id = material.id
        li.textContent = material.name
        list.appendChild(li)
        li.addEventListener('click', (e) => {
            image.src = material.image
            let li2 = material.name
            let qty = 100
            let cost = material.discount_price
            let total = qty * cost
            createTable(li2, qty, cost, total)
            // li2.textContent = material.name
            // finalList.appendChild(li2)
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

// let inputQuery = document.querySelector('.input')
// .then(data => {
//     for (let item of data) {
//         inputQuery.addEventListener('submit', (e) => {
//             e.preventDefault();
//             let newQuery = 
//         })
//     }
    
// })


let material = document.querySelector('.material').value
let descr1 = document.querySelector('.descr1').value
let descr2 = document.querySelector('.descr2').value
let stock = document.querySelector('.stock').value
let discPrice = document.querySelector('.disc-price').value
let actPrice = document.querySelector('.act-price').value
let imgUrl = document.querySelector('.img-url').src
let addSubmit = document.querySelector('.add')


        


addSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3000/materials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({

            name: material,
            description_1: descr1,
            description_2: descr2,
            stock: stock,
            actual_price: discPrice,
            discount_price: actPrice,
            image: imgUrl,
        }) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})


































// let listLi = document.querySelectorAll('.list li')
// console.log(listLi)

// listLi.forEach(li => {
//     li.addEventListener('click', (e) => {
        
//     })
// })








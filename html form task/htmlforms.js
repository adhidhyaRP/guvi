
let form = document.getElementById("forms")
addEventListener('submit', (e)=>{
    e.preventDefault()

    let tab = document.getElementById("table")
    let firstname = document.getElementById("firstname").value
    let lastname= document.getElementById("lastname").value
    let address = document.getElementById("address").value
    let pincode = document.getElementById("pincode").value
    let gender = document.getElementById("gender").value
    let food = document.getElementById("food").value
    let state = document.getElementById("state").value
    let country = document.getElementById("country").value
let row = tab.insertRow()

let cell1 = row.insertCell(0)
let cell2 = row.insertCell(1)
let cell3 = row.insertCell(2)
let cell4 = row.insertCell(3)
let cell5 = row.insertCell(4)
let cell6 = row.insertCell(5)
let cell7 = row.insertCell(6)
let cell8 = row.insertCell(7)

cell1.innerText = firstname
cell2.innerText = lastname
cell3.innerText = address
cell4.innerText = pincode
cell5.innerText = gender
cell6.innerText = food
cell7.innerText = state
cell8.innerText = country 

form.reset()
});


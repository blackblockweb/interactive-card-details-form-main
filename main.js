let cardname = document.querySelector(".cardnam") 
let cardnumer = document.querySelector(".cardnumer") 
let cardmoth = document.querySelector(".cardmoth") 
let cardyear = document.querySelector(".cardyear") 
let cardcvc = document.querySelector(".cardcvc") 

let numbercard = document.getElementById("numbercard")
let cardname1 = document.getElementById("cardname")
let carddata = document.getElementById("carddata")
let cvc = document.getElementById("cvc")
let moth = document.querySelector(".moth")
let year = document.querySelector(".year")


cardname.addEventListener( "keyup", function() {
    cardname1.innerHTML = cardname.value
})

cardnumer.addEventListener( "keyup", function() {
    numbercard.innerHTML = cardnumer.value
})

cardmoth.addEventListener( "keyup", function() {
    moth.innerHTML = cardmoth.value + '/'
})

cardyear.addEventListener( "keyup", function() {
    year.innerHTML = cardyear.value
})

cardcvc.addEventListener( "keyup", function() {
    cvc.innerHTML = cardcvc.value
})
   
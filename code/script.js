
// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

//b)

const yourName = prompt(`What's your name? 😊`)

alert(
  `Hello ${yourName}!🌟`
)



// Step 2 - Food choice

const foodSelection = prompt(
  `We offer delicious Italian food. (Please select the food of your choice with the corresponding number).
  1 - 🍕 Pizza
  2 - 🍝 Pasta
  3 - 🥗 Sallad`
)

let selectedFood = ""

if (foodSelection === "1") {
  selectedFood = "Pizza"
} else if (foodSelection === "2") {
  selectedFood = "Pasta"
} else if (foodSelection === "3") {
  selectedFood = "Salad"
} else {
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)
}

alert(`You choose ${selectedFood}, Yummy!😃`)




// Step 3 - Subtype choice

let aSubtype = ""


 if (foodSelection === "1") {selectedSubtype = prompt(`Which type of pizza do you want to order?🍕\n (please select the pizza of your choice with the corresponding number)
  1 - Pizza Margharita
  2 - Pizza Vegetariana
  3 - Pasta Capriccosa`)

 if (selectedSubtype === "1") {
  aSubtype = "Pizza Margharita"
} else if (selectedSubtype === "2") { 
  aSubtype = "Pizza Vegetariana" 
} else if (selectedSubtype === "3") { 
  aSubtype = "Pizza Capriccosa" 
} else {
  alert("Number input is invalid!☹️ please return and select a valid number.")
  exit(1)
      }
}

if (foodSelection === "2") {selectedSubtype = prompt(`Which type of pasta do you want to order?🍝\n (please select the pasta of your choice with the corresponding number )
 1 - Pasta Fungi
 2 - Pasta Cacio e pepe
 3 - Pasta Bolognese`)

if (selectedSubtype === "1") {
 aSubtype = "Pasta Fungi"
} else if (selectedSubtype === "2") { 
 aSubtype = "Pasta Cacio e pepe" 
} else if (selectedSubtype === "3") { 
 aSubtype = "Pasta Bolognese" 
} else {
 alert("Number input is invalid!☹️ please return and select a valid number.")
 exit(1)
     }
}

if (foodSelection === "3") {selectedSubtype = prompt(`Which type of Salad do you want to order?🥗\n(please select the salad of your choice with the corresponding number )
 1 - Caesar Salad
 2 - Scampi Salad
 3 - Avocado Salad`)

if (selectedSubtype === "1") {
 aSubtype = "Caesar Sallad"
} else if (selectedSubtype === "2") { 
 aSubtype = "Scampi Sallad" 
} else if (selectedSubtype === "3") { 
 aSubtype = "Avocado Sallad" 
} else {
 alert("Number input is invalid!☹️ please return and select a valid number.")
 exit(1)
     }
}

alert(`You chose ${aSubtype}😃 If this is correct click 🆗`)




// Step 4 - Age

let age = prompt (`Is the meal intended for an adult or child?😊\n(Please type in your age)`)

if (age >= 16) { alert ("Got it, a regular sized portion it is!🌟\nThat will be 11$\nClick 🆗 to continue")
} else if ( age <= 15) {
alert ("Understood, we'll fix a smaller portion for you!☺️\nThat will be 6$\nClick 🆗 to continue")
} else {
alert (`Input incorrect, please enter a valid number.`)
exit(1)
}
  

// Step 5 - Order confirmation

let price = ""

if (age >= 16) {price = 11
alert (`You have selected a ${aSubtype} with a total of ${price}$\n`)  
} else if (age <= 15)  {price = 6
alert (`You have selected a ${aSubtype} with a total of ${price}$\n`)
}


finalConfirmation = prompt (`Do you want to confirm this order: One ${aSubtype} ${price}$\n
(please enter a valid number):
1 - YES 
2 - NO`)
if (finalConfirmation === "1") { 
alert (`Thank you for your order ${yourName}🎉 `)
} else if (finalConfirmation ==="2"){ 
alert (`Sorry to see you go, welcome back another time🥰`)
} else { 
alert (`Input incorrect, please enter a valid number.`)
exit(1)}




//information (roll type, glazing, pack size, base price) into an instance of the class Roll
class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing = rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

//Create a set to represent my cart.
let newRollset = new Set();

//Create a function to add new roll to the set
function newRolls(rollType, rollGlazing, packSize, basePrice) {
  const newOne = new Roll(rollType, rollGlazing, packSize, basePrice);
  newRollset.add(newOne);
  return newOne;
}

//code roll data provided in the assignment
//const roll1 = newRolls('Original', 'Sugar Milk', '1', rollop["Original"].basePrice);
//const roll2 = newRolls('Walnut', 'Vanilla Milk', '12', rollop["Walnut"].basePrice);
//const roll3 = newRolls('Raisin', 'Sugar Milk', '3', rollop["Raisin"].basePrice);
//const roll4 = newRolls('Apple', 'Original', '3', rollop["Apple"].basePrice);

//function to calculate total price in the shopping cart which can also be used to update price
function totalPrice() {
  let ttPrice = 0;

  //pack size change
  for (let i of newRollset) {
    let price = i.basePrice;
    let pack = i.size;
    if (pack == 6) {
      pack = 5;
    } else if (pack == 12) {
      pack = 10;
    } else {
      pack = pack;
    }
    let glz = i.glazing;

    //glazing price change
    if (glz == "Vanilla Milk") {
      price = price + 0.5;
    } else {
      price = price;
    }
    let total = price * pack;

    ttPrice = ttPrice + total;
  }

  //total price to two digits

  return ttPrice.toFixed(2);
}

//function to make use of template tag, update price, and make functional delete button
function newCartItem(newOne) {
  const tempCart = document.querySelector("#cartTemplate").content;
  const copyCart = document.importNode(tempCart, true);
  newOne.element = copyCart.querySelector(".onecontainer"); //actual card containter
  const wholeList = document.querySelector(".cart-item"); //whole shopping cart div (multiple cards)
  wholeList.append(newOne.element); //update the shopping cart with items inside the set
  const btnDelete = newOne.element.querySelector(".remove"); //get remove button from DOM
  btnDelete.addEventListener("click", () => {
    deleteElement(newOne);
    const totalElement = document.querySelector(".priceTotal");
    totalElement.innerText = "$ " + totalPrice(); //update the recalculate the total price
  });
  changeTextimg(newOne); //update text and image description of each item with rollop data js
}

//construct html div using template for each item
for (const newOne of newRollset) {
  newCartItem(newOne);
}

//function to change text and image description of each item
function changeTextimg(newOne) {
  //get elements id/class from DOM
  const imgElement = newOne.element.querySelector(".cart-thumbnail");
  const packElement = newOne.element.querySelector("#packChoice");
  const glazeElement = newOne.element.querySelector("#glazChoice");
  const nameElement = newOne.element.querySelector("#nameChoice");
  const priceElement = newOne.element.querySelector(".price");
  //replace these element with current data from rollop.js
  imgElement.src = rollop[newOne.type].imageFile;
  nameElement.innerText = newOne.type;
  glazeElement.innerText = newOne.glazing;
  packElement.innerText = newOne.size;
  //get price and pack to calculate price per item group
  let basePricenow = newOne.basePrice;
  let packnow = newOne.size;

  //pack size change
  if (packnow == 6) {
    packnow = 5;
  } else if (packnow == 12) {
    packnow = 10;
  } else {
    packnow = packnow;
  }
  let nowGlaze = newOne.glazing;

  //glazing price change
  if (nowGlaze == "Vanilla Milk") {
    basePricenow = basePricenow + 0.5;
  } else {
    basePricenow = basePricenow;
  }

  let packPrice = packnow * basePricenow;
  //update price per pack group to the page
  priceElement.innerText = "$ " + packPrice.toFixed(2);
}

//create a function to enable getting data from local storage
function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem("storedRolls");
  const cartArray = JSON.parse(cartArrayString);
  console.log(cartArray);

  for (let rollData of cartArray) {
    const newOne = new Roll(
      rollData.type,
      rollData.glazing,
      rollData.size,
      rollData.basePrice
    );
    newRollset.add(newOne);
    newCartItem(newOne);
  }
}

//call total price function to calculate total at the beginning
const totalElement = document.querySelector(".priceTotal");
totalElement.innerText = "$ " + totalPrice();

//store item in local storeage
function saveToLocalStorage() {
  rollDataArray = Array.from(newRollset);
  const cartArrayString = JSON.stringify(rollDataArray);
  localStorage.setItem("storedRolls", cartArrayString);
}

// Remove button function. delete both graphical representation and data
function deleteElement(newOne) {
  newOne.element.remove();
  newRollset.delete(newOne);
  totalElement.innerText = "$ " + totalPrice();
  saveToLocalStorage();
}

//retrieve from local storage when there's data in it
if (localStorage.getItem("storedRolls") != null) {
  retrieveFromLocalStorage();
  totalElement.innerText = "$ " + totalPrice();
}

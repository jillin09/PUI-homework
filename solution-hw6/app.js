//empty cart array
const cartRoll=[];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// Update the header text
const headerElement = document.querySelector('#page-title');
headerElement.innerText = rollType + ' cinnamon roll' ;

// Update the image
const cinnaImage = document.querySelector('.card-thumbnail');
cinnaImage.src = rollop[rollType].imageFile;


// Update price
const currentPrice = document.querySelector('#priceAll');
currentPrice.innerText = rollop[rollType].basePrice + " $";


// create glazing and pack options
    let allFlavors = [
    {
      flavor: 'Keep original',
      priceChange: 0,
    },
    {
      flavor: 'Sugar milk',
      priceChange: 0,
    },
    {
      flavor: 'Vanilla milk',
      priceChange: 0.50,
    },
    {
      flavor: 'Double Chocolate',
      priceChange: 1.50,
    }
     ];

    let allPacks = [
    {
      pack: '1',
      packChange: 1,
    },
    {
      pack: '3',
      packChange: 3,
    },
    {
      pack: '6',
      packChange: 5,
    },
    {
      pack: '12',
      packChange: 10,
    }
     ];

  // get value bracket of glazing dropdown lists 

   let mylist = document.querySelector("#dropdown");

  // dynamic populate flavor options  
   for (let i = 0; i < allPacks.length; i++) {
    let option = document.createElement("option");
    let nowvalue = allFlavors[i]
    option.value =rollop[rollType].basePrice+ nowvalue.priceChange;
    option.text = nowvalue.flavor;
    mylist.add(option);
     }

  // get value bracket of pack dropdown lists 

   let mylist2 = document.querySelector("#dropdown2");

  // dynamic populate pack options  

   for (let i = 0; i < allPacks.length; i++) {
    let option = document.createElement("option");
    let nowvalue = allPacks[i]
    option.value = nowvalue.packChange;
    option.text = nowvalue.pack;
    mylist2.add(option);
     }

function glazingChange(element) {
  // get value of selected glazing option
  const glazingValue = element.value;
  const packsize = document.querySelector("#dropdown2").value;
    //update the price
  document.getElementById("priceAll").innerHTML = '$ ' + parseFloat(glazingValue*packsize).toFixed(2);
}
function packChange(element) {
    // get value of selected glazing option
    const PackSize = element.value;
    const glazingcost = document.querySelector("#dropdown").value;
    //update the price
    document.getElementById("priceAll").innerHTML = '$ ' + parseFloat(PackSize*glazingcost).toFixed(2);
  }
  
///When the user clicks on “Add to Cart,” save all of the current product 
//information (roll type, glazing, pack size, base price) into an instance of the class Roll
  class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//add to cart button initialization from DOM
const addtocart = document.querySelector('#cartbutton');

//check if local storage has data inside
checkLocalStorage();

//on click function of add to cart button
//contains 1.push new roll
//2. save to local storage for further use
addtocart.onclick = function addToCa() {
  let mypac = document.getElementById('dropdown2').options[document.getElementById('dropdown2').selectedIndex].text ;
  let glazinNow = document.getElementById('dropdown').options[document.getElementById('dropdown').selectedIndex].text;
    newItem = new Roll(rollType, glazinNow,mypac,document.getElementById('dropdown').value);
    console.log(newItem);
    cartRoll.push(newItem);
    console.log(cartRoll);
    //store data after clicking the add to cart button
    saveToLocalStorage();
}

//store item in local storeage
function saveToLocalStorage() {
  //console.log(cart);
  const cartArrayString = JSON.stringify(cartRoll);
  //console.log(cartArrayString);
  localStorage.setItem('storedRolls', cartArrayString);

}

//create a function to check if there is data in local storage
//if yes, add data to current array
//if not, current array=empty=[]
function checkLocalStorage() {
  const cartArrayString = localStorage.getItem('storedRolls');
  const cartArray = JSON.parse(cartArrayString);
  console.log(cartArray);
  for (let rollData of cartArray) {
    const newOne = new Roll(rollData.type, rollData.glazing, rollData.size, rollData.basePrice);
    cartRoll.push(newOne);
}
}
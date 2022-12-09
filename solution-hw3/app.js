// create glazing and pack options
let allFlavors = [
  {
    flavor: "Keep original",
    priceChange: 0,
  },
  {
    flavor: "Sugar milk",
    priceChange: 0,
  },
  {
    flavor: "Vanilla milk",
    priceChange: 0.5,
  },
  {
    flavor: "Double Chocolate",
    priceChange: 1.5,
  },
];

let allPacks = [
  {
    pack: "1",
    packChange: 1,
  },
  {
    pack: "3",
    packChange: 3,
  },
  {
    pack: "6",
    packChange: 5,
  },
  {
    pack: "12",
    packChange: 10,
  },
];

// get value bracket of glazing dropdown lists

let mylist = document.querySelector("#dropdown");

// dynamic populate flavor options

for (let i = 0; i < allPacks.length; i++) {
  let option = document.createElement("option");
  let nowvalue = allFlavors[i];
  option.value = 2.49 + nowvalue.priceChange;
  option.text = nowvalue.flavor;
  mylist.add(option);
}

// get value bracket of pack dropdown lists

let mylist2 = document.querySelector("#dropdown2");

// dynamic populate pack options

for (let i = 0; i < allPacks.length; i++) {
  let option = document.createElement("option");
  let nowvalue = allPacks[i];
  option.value = nowvalue.packChange;
  option.text = nowvalue.pack;
  mylist2.add(option);
}

function glazingChange(element) {
  // get value of selected glazing option
  const glazingValue = element.value;
  const packsize = document.querySelector("#dropdown2").value;
  //update the price
  document.getElementById("priceAll").innerHTML =
    "$ " + parseFloat(glazingValue * packsize).toFixed(2);
}
function packChange(element) {
  // get value of selected glazing option
  const PackSize = element.value;
  const glazingcost = document.querySelector("#dropdown").value;
  //update the price
  document.getElementById("priceAll").innerHTML =
    "$ " + parseFloat(PackSize * glazingcost).toFixed(2);
}

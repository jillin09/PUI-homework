var myFullpage = new fullpage("#fullpage", {
  sectionsColor: [
    "#1bbc9b",
    "#4BBFC3",
    "#7BAABE",
    "#f5dd42",
    "#f5b642",
    "#f59e42",
    "#f57842",
    "#ff867a",
  ],
  anchors: [
    "firstPage",
    "secondPage",
    "3rdPage",
    "4thpage",
    "5thpage",
    "6thpage",
    "7thpage",
    "8thpage",
    "9thpage",
  ],
  menu: "#menu",
  continuousVertical: true,
  ///navigation: true,
  slidesNavigation: true,
  ///lazyLoad: true,
  credits: { enabled: false },
});

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function clickSeed() {
  let textOriginal = "Now we have a tomato seed";
  let textContent =
    "Tomatoes are 95 percent water, with most varieties soaking up summer rains to become pump and juicy on the vine. Water, along with sunshine and nutrient-rich soil, is needed at every stage of the growing process. Otherwise, tomatoes won't grow, blossom and produce fruit. ";
  document.getElementById("seedText").innerText = textContent;
}
function clickSprout() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Tomatoes thrive in soil rich in minerals and micronutrients including phosphorus, potassium, calcium, and magnesium. Fortunately, tomato plants do well in almost all types of soil except heavy clay soil.";
  document.getElementById("sproutText").innerText = textContent;
}
function clickSun() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Tomato plants need at least six hours of full sun exposure daily, but if you want to achieve the best results, increase the yield and grow sweeter fruits, you might aim to give your tomato plants at least eight hours of sun per day.";
  document.getElementById("sunText").innerText = textContent;
}

function clickCut() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Removing the lower leaves from your tomato plants is the earliest and mildest form of pruning, and for some gardeners it might represent all the pruning you'll ever want to do. The reasoning is simple: Those lower leaves are the ones that are most at risk for infection with soil-borne diseases. ";
  document.getElementById("cutText").innerText = textContent;
}
function clickBee() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Unlike most flowers, tomato plants do not give their pollen freely to any old bee or butterfly passing by. They only release it after intense stimulation, such as the kind bumblebees create by rapidly flexing their flight muscles.";
  document.getElementById("beeText").innerText = textContent;
}
function clickGreen() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Tomatoes need warmth to ripen. The warmer a tomato is, the quicker it will ripen – putting your tomatoes in the fridge is therefore no help to them at all, and can even degrade their texture to 'mealy'. ";
  document.getElementById("greenText").innerText = textContent;
}
function clickTomato() {
  let textOriginal = "Finally, the seed baby sprouted";
  let textContent =
    "Studies suggest that tomatoes may improve heart health. An example of this is how tomato products can fight inflammation and signs of oxidative stress. There’s also research that suggests tomatoes promote skin health. ";
  document.getElementById("tomatoText").innerText = textContent;
}
function setImageVisible(id, visible) {
  var img = document.getElementById(id);
  img.style.visibility = visible ? "visible" : "hidden";
}

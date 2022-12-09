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
  if (document.getElementById("seedText").innerText.length < 100) {
    document.getElementById("seedText").innerText =
      varieText["seedText"].textContent;
  } else {
    document.getElementById("seedText").innerText =
      varieText["seedText"].textOriginal;
  }
}
function clickSprout() {
  if (document.getElementById("sproutText").innerText.length < 100) {
    document.getElementById("sproutText").innerText =
      varieText["sproutText"].textContent;
  } else {
    document.getElementById("sproutText").innerText =
      varieText["sproutText"].textOriginal;
  }
}
function clickSun() {
  if (document.getElementById("sunText").innerText.length < 100) {
    document.getElementById("sunText").innerText =
      varieText["sunText"].textContent;
  } else {
    document.getElementById("sunText").innerText =
      varieText["sunText"].textOriginal;
  }
}

function clickCut() {
  if (document.getElementById("cutText").innerText.length < 100) {
    document.getElementById("cutText").innerText =
      varieText["cutText"].textContent;
  } else {
    document.getElementById("cutText").innerText =
      varieText["cutText"].textOriginal;
  }
}
function clickBee() {
  if (document.getElementById("beeText").innerText.length < 100) {
    document.getElementById("beeText").innerText =
      varieText["beeText"].textContent;
  } else {
    document.getElementById("beeText").innerText =
      varieText["beeText"].textOriginal;
  }
}
function clickGreen() {
  if (document.getElementById("greenText").innerText.length < 100) {
    document.getElementById("greenText").innerText =
      varieText["greenText"].textContent;
  } else {
    document.getElementById("greenText").innerText =
      varieText["greenText"].textOriginal;
  }
}
function clickTomato() {
  if (document.getElementById("tomatoText").innerText.length < 100) {
    document.getElementById("tomatoText").innerText =
      varieText["tomatoText"].textContent;
  } else {
    document.getElementById("tomatoText").innerText =
      varieText["tomatoText"].textOriginal;
  }
}

function toggleMute() {
  var myAudio = document.getElementById('myVideo');
  myAudio.muted = !myAudio.muted;
}
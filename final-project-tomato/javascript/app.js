var myFullpage = new fullpage("#fullpage", {
  sectionsColor: [
    "#daf59f",
    "#cdff64",
    "#d2ea43",
    "#f5dd42",
    "#f5b642",
    "#f59e42",
    "#f57842",
    "#ff867a", ///add color to pages created
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
    "9thpage", ///add anchor points to pages to enable menu clicking and landing
  ],
  menu: "#menu",
  continuousVertical: true, ///enable continuout scrolling from last to first page
  credits: { enabled: true },
});
///display play button text
function displayPlaytext() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
///show up new text after user click on the image
function clickSeed() {
  if (document.getElementById("seedText").innerText.length < 100) {
    document.getElementById("seedText").innerText =
      varieText["seedText"].textContent;
  } else {
    document.getElementById("seedText").innerText =
      varieText["seedText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickSprout() {
  if (document.getElementById("sproutText").innerText.length < 100) {
    document.getElementById("sproutText").innerText =
      varieText["sproutText"].textContent;
  } else {
    document.getElementById("sproutText").innerText =
      varieText["sproutText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickSun() {
  if (document.getElementById("sunText").innerText.length < 100) {
    document.getElementById("sunText").innerText =
      varieText["sunText"].textContent;
  } else {
    document.getElementById("sunText").innerText =
      varieText["sunText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickCut() {
  if (document.getElementById("cutText").innerText.length < 100) {
    document.getElementById("cutText").innerText =
      varieText["cutText"].textContent;
  } else {
    document.getElementById("cutText").innerText =
      varieText["cutText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickBee() {
  if (document.getElementById("beeText").innerText.length < 100) {
    document.getElementById("beeText").innerText =
      varieText["beeText"].textContent;
  } else {
    document.getElementById("beeText").innerText =
      varieText["beeText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickGreen() {
  if (document.getElementById("greenText").innerText.length < 100) {
    document.getElementById("greenText").innerText =
      varieText["greenText"].textContent;
  } else {
    document.getElementById("greenText").innerText =
      varieText["greenText"].textOriginal;
  }
}
///show up new text after user click on the image

function clickTomato() {
  if (document.getElementById("tomatoText").innerText.length < 100) {
    document.getElementById("tomatoText").innerText =
      varieText["tomatoText"].textContent;
  } else {
    document.getElementById("tomatoText").innerText =
      varieText["tomatoText"].textOriginal;
  }
}
///mute the video after user click on the toggle switch

function toggleMute() {
  var myAudio = document.getElementById("myVideo");
  myAudio.muted = !myAudio.muted;
}

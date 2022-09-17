var inputText = document.querySelector(".decoded-text");
var paragraph = document.querySelector(".text-result-paragraph");
var outputText = document.querySelector(".textarea-result-paragraph");
var encryptButton = document.querySelector(".encrypt-button");
var decryptButton = document.querySelector(".decrypt-button");
var copyButton = document.querySelector(".copy-button");


var input = document.querySelector(".decoded-text");
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
      e.preventDefault();
  }
});

function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);

    var pattern = '[a-z]';
    if (char.match(pattern)) {
      return true;
  }
}

function encrypt() {
  var encryptedText = inputText.value.toLowerCase();

  var result = encryptedText

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  outputText.value = result;

  document.querySelector(".img-text-result").style.display = "none";
  document.querySelector(".text-result-title").style.display = "none";
  document.querySelector(".text-result-paragraph").style.display = "none";
  document.querySelector(".textarea-result-paragraph").innerHTML = result;
  document.querySelector(".textarea-result-paragraph").style.display = "block";
  document.querySelector(".copy-button").style.display = "block";
}

function decrypt() {
  var decryptedText = inputText.value.toLowerCase();

  var result = decryptedText

    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  outputText.value = result;

  document.querySelector(".img-text-result").style.display = "none";
  document.querySelector(".text-result-title").style.display = "none";
  document.querySelector(".text-result-paragraph").style.display = "none";
  document.querySelector(".textarea-result-paragraph").innerHTML = result;
  document.querySelector(".textarea-result-paragraph").style.display = "block";
  document.querySelector(".copy-button").style.display = "block";
}

function copyToClipboard() {
  var text = document.querySelector(".decoded-text");
  var textContent = document.querySelector(
    ".textarea-result-paragraph"
  ).innerHTML;

  navigator.clipboard.writeText(textContent);

  text.value = "";

  setTimeout(function () {
    location.reload();
  }, 800);
}

encryptButton.addEventListener("click", encrypt);
decryptButton.addEventListener("click", decrypt);
copyButton.addEventListener("click", copyToClipboard);

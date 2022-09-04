console.log("Hello There :0");

const mainCSS = document.getElementById("mainCSS");
const uploadForm = document.getElementById("uploadForm");
const fileInputBox = document.getElementById("fileInputBox");
const fileInputButton = document.getElementById("fileInputButton");
const extensionErrorMessage = document.getElementById("extensionErrorMessage");
const encryptFileBox = document.getElementById("encryptFileBox");
const themeBox = document.getElementById("themeBox");

fileInputBox.addEventListener("input", function(e) {
    var splitFileName = e.target.value.split(".");
    if (splitFileName.length < 3) {
      fileInputButton.disabled = false;
        extensionErrorMessage.setAttribute("style", "opacity: 0;");
    } else {
      fileInputButton.disabled = true;
        extensionErrorMessage.setAttribute("style", "opacity: 100; color: red; font-size: 10;");
    }
});

encryptFileBox.addEventListener("click", function() {
    if (encryptFileBox.checked == true) {
        uploadForm.setAttribute("action", "https://Main-Charlzk-Server.charlzk.repl.co/upload");
    } else {
        uploadForm.setAttribute("action", "https://Main-Charlzk-Server.charlzk.repl.co/uploadnotencrypted");
    }
});

themeBox.addEventListener("click", function() {
    if (themeBox.checked == true) {
        mainCSS.setAttribute("href", "./water.css/dark.css");
    } else {
        mainCSS.setAttribute("href", "./water.css/light.css");
    }
});
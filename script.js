console.log("Hello There :0");

const fileInputBox = document.getElementById("fileInputBox");
const fileInputButton = document.getElementById("fileInputButton");
const extensionErrorMessage = document.getElementById("extensionErrorMessage");
const encryptFileBox = document.getElementById("encryptFileBox");
const storageDownloaderBox = document.getElementById("storageDownloaderBox");
const storageDownloadButton = document.getElementById("storageDownloadButton");
const uploadForm = document.getElementById("uploadForm");

fileInputBox.addEventListener("input", function(e) {
    var splitFileName = e.target.value.split(".");
    if (splitFileName.length < 3) {
      fileInputButton.disabled = false;
        extensionErrorMessage.setAttribute("style", "opacity: 0;");
    } else {
      fileInputButton.disabled = true;
        extensionErrorMessage.setAttribute("style",
            "opacity: 100; color: red; font-size: 10;"
        );
    }
});

storageDownloaderBox.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        window.location.href = `https://Main-Charlzk-Server.charlzk.repl.co/download?filename=${storageDownloaderBox.value}`;
    }
});

function encryptionBox() {
    if (encryptFileBox.checked == true) {
        uploadForm.setAttribute(
            "action",
            "https://Main-Charlzk-Server.charlzk.repl.co/upload"
        );
    } else {
        uploadForm.setAttribute(
            "action",
            "https://Main-Charlzk-Server.charlzk.repl.co/uploadnotencrypted"
        );
    }
}

storageDownloadButton.addEventListener("click", function() {
    window.location.href = `https://Main-Charlzk-Server.charlzk.repl.co/download?filename=${storageDownloaderBox.value}`;
});
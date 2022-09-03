console.log("Hello There :0");

const fileInput = document.getElementById("fileInput");
const fileUpload = document.getElementById("fileUpload");
const extErrMessage = document.getElementById("extensionError");
const storageDownloader = document.getElementById("storageDownloader");
const uploadForm = document.getElementById("uploadForm");
const encryptFileBox = document.getElementById("encryptFileBox");

fileInput.addEventListener("input", function (e) {
  var splitFileName = e.target.value.split(".");
  if (splitFileName.length < 3) {
    fileUpload.disabled = false;
    extErrMessage.setAttribute("style", "opacity: 0;");
  } else {
    fileUpload.disabled = true;
    extErrMessage.setAttribute(
      "style",
      "opacity: 100; color: red; font-size: 10;"
    );
  }
});

storageDownloader.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    window.location.href = `https://Main-Charlzk-Server.charlzk.repl.co/download?filename=${storageDownloader.value}`;
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

function storageDLClick() {
  window.location.href = `https://Main-Charlzk-Server.charlzk.repl.co/download?filename=${storageDownloader.value}`;
}

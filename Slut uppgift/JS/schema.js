console.log("hej")
document.getElementById("textSection").innerHTML = "kalle";
function readTextFile() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "bamba.txt", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        document.getElementById("textSection").innerHTML = allText;
      }
    }
    rawFile.send();
  }
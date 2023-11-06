document.getElementById("surpriseButton").addEventListener("click", function() {
  var surpriseDiv = document.getElementById("surprise");
  var surpriseText = document.createElement("p");
  surpriseText.textContent = "🎉🎁🎂 Woo-hoo! Ini adalah kejutan untukmu! 🎂🎁🎉";
  surpriseDiv.appendChild(surpriseText);
});
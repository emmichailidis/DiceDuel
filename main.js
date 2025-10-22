// Array of dice images
var Dices = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png"
];

// Hide dice images initially
document.querySelector(".img1").classList.add("hidden");
document.querySelector(".img2").classList.add("hidden");

// Load player names from localStorage or use defaults
var player1Name = localStorage.getItem("player1Name") || "Player 1";
var player2Name = localStorage.getItem("player2Name") || "Player 2";

// Display names in UI
document.querySelectorAll(".dice")[0].querySelector(".player-name").textContent = player1Name;
document.querySelectorAll(".dice")[1].querySelector(".player-name").textContent = player2Name;

// Edit buttons logic
document.querySelectorAll(".edit-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    var player = btn.getAttribute("data-player");
    var name = prompt("Enter name for " + (player === "1" ? "Player 1" : "Player 2"));
    if(name && name.trim() !== ""){
      name = name.trim();
      if(player === "1"){
        player1Name = name;
        localStorage.setItem("player1Name", player1Name); // save to localStorage
        document.querySelectorAll(".dice")[0].querySelector(".player-name").textContent = player1Name;
      } else {
        player2Name = name;
        localStorage.setItem("player2Name", player2Name); // save to localStorage
        document.querySelectorAll(".dice")[1].querySelector(".player-name").textContent = player2Name;
      }
    }
  });
});

// When the page loads
window.addEventListener("load", function() {

  // Random numbers for Player 1 and Player 2
  var randomNumber1 = Math.floor(Math.random() * 6);
  var randomNumber2 = Math.floor(Math.random() * 6);

  // Set dice images
  document.querySelector(".img1").setAttribute("src", Dices[randomNumber1]);
  document.querySelector(".img2").setAttribute("src", Dices[randomNumber2]);

  // Show the dice
  document.querySelector(".img1").classList.remove("hidden");
  document.querySelector(".img2").classList.remove("hidden");

  // Decide winner and update title
  var title = document.getElementById("RefreshBtn");

  if (randomNumber1 > randomNumber2) {
    title.textContent = player1Name + " Wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = player2Name + " Wins!";
  } else {
    title.textContent = "😎 It's a Draw!";
  }
});

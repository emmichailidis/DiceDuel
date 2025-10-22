# 🎲 Dice Game Web App

![GitHub repo size](https://img.shields.io/github/repo-size/emmichailidis/DiceDuel)
![GitHub stars](https://img.shields.io/github/stars/emmichailidis/DiceDuel?style=social)
![GitHub forks](https://img.shields.io/github/forks/emmichailidis/DiceDuel?style=social)
![GitHub issues](https://img.shields.io/github/issues/emmichailidis/DiceDuel)
![GitHub last commit](https://img.shields.io/github/last-commit/emmichailidis/DiceDuel)
![GitHub license](https://img.shields.io/github/license/emmichailidis/DiceDuel)

A fun and interactive **dice game** built with **HTML, CSS, and JavaScript**. Roll dice, customize player names, and see who wins! Fully responsive for desktops, tablets, and smartphones.

---

## 🌟 Features

- 🎯 Random dice roll on each refresh  
- 🖊️ Edit player names using the **Edit** buttons  
- 🏆 Winner announcement dynamically shows player names  
- ✨ Hands next to dice for a realistic rolling effect  
- 📱 Responsive design for tablets and smartphones  
- 💾 Names persist across reloads using `localStorage`  

---

## 🖼️ Demo

![Dice Game Demo](./images/dice-demo.gif)  

**Live demo:** [View Online](https://emmichailidis.github.io/dice-game/)

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emmichailidis/dice-game.git
Open index.html in your web browser.

Click “Edit” next to a player to set a custom name.

Click the Refresh Me button to roll the dice.

See which player wins! 🏆

📁 Folder Structure

dice-game/
├─ index.html
├─ styles.css
├─ main.js
└─ images/
   ├─ dice1.png
   ├─ dice2.png
   ├─ dice3.png
   ├─ dice4.png
   ├─ dice5.png
   ├─ dice6.png
   ├─ hand-left.png
   ├─ hand-right.png
   └─ dice-demo.gif

⚙️ How it Works
Dice images are randomly selected on page load.

The <h1> header updates to show which player wins, or a draw.

Player names are editable using a prompt().

Names are stored in localStorage and persist across reloads.

CSS ensures the game is fully responsive for any screen size.

💻 Technologies
HTML5

CSS3 (Flexbox + Media Queries)

JavaScript (DOM manipulation, localStorage)

🎨 Customization
Replace dice or hand images in the images/ folder.

Adjust sizes, fonts, and colors in styles.css.

Add animations (e.g., dice shake) with CSS or JavaScript for more interactivity.

📜 License
MIT License – feel free to use, modify, or share.

🤝 Author
Emmichailidis
Web Games & Fun Projects

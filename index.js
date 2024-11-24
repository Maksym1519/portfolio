const link = document.getElementById("arrow");

link.classList.add("pulse-effect");

setTimeout(() => {
  link.classList.remove("pulse-effect");
}, 15000); 
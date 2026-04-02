const canvas = document.getElementById("spiderCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 200, 200);
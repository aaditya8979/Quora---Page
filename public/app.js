// app.js
document.getElementById("quoraTitle").addEventListener("mouseover", function() {
  document.title = "Quora Post - Viewing";
});
document.getElementById("quoraTitle").addEventListener("mouseout", function() {
  document.title = "Quora Post";
});
// navber a heart element count start
const heartCountEl = document.getElementById("navbar-heart-count");
let heartCount = parseInt(heartCountEl.textContent);

const heartIcons = document.querySelectorAll(".heart-icon"); 

for (const heartIcon of heartIcons) {
  heartIcon.style.cursor = "pointer"; 
  heartIcon.addEventListener("click", function(){
    heartCount++; 
    heartCountEl.textContent = heartCount; 
  });
}
// navber a heart element count end



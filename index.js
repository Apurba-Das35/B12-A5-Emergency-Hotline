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







// call button alert and coin delete and call history added with local time.
const coinCountEl = document.getElementById("navbar-coin-count"); // 
let coins = parseInt(coinCountEl.textContent);

// Call History container
const callHistoryContainer = document.getElementById("call-history"); 

// all card select
const cards = document.querySelectorAll(".card");

for (const card of cards) {
  const callBtn = card.querySelector(".fa-phone").closest("button");
  const serviceName = card.querySelector("p").textContent; 
  const serviceNumber = card.querySelector("h1").textContent;

  callBtn.addEventListener("click", function() {
    if (coins < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    // Alert show
    alert(`Calling ${serviceName} at ${serviceNumber}`);

    // Coins delete
    coins -= 20;
    coinCountEl.textContent = coins;

    // Call history added service-name, number and local time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // div tag create and style added
    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center bg-gray-100 p-2 my-2 rounded";
    historyItem.innerHTML = `
      <div>
        <strong>${serviceName}</strong><br>
        <span>${serviceNumber}</span>
      </div>
      <div class="text-sm text-gray-600">${timeString}
      </div>
    `;
    callHistoryContainer.appendChild(historyItem);
  });
}





// call history clear
const callHistoryContaine = document.getElementById("call-history");
const clearHistoryBtn = document.getElementById("clear-history-btn");

clearHistoryBtn.addEventListener("click", function(){
  callHistoryContaine.innerHTML = "";
});
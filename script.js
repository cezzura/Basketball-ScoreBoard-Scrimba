let homeBtn = document.getElementById("home-btn");
let guestBtn = document.getElementById("guest-btn");
let count = 0;

function homePlusOne() {
  count += 1;
  homeBtn.textContent = count;
}

function homePlusTwo() {
  count += 2;
  homeBtn.textContent = count;
}

function homePlusThree() {
  count += 3;
  homeBtn.textContent = count;
}

function guestPlusOne() {
  count += 1;
  guestBtn.textContent = count;
}

function guestPlusTwo() {
  count += 2;
  guestBtn.textContent = count;
}

function guestPlusThree() {
  count += 3;
  guestBtn.textContent = count;
}

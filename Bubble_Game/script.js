var timer = 30;
var score = 0;
var random = 0;

function increaseScore() {
  var scoreIncreased = (score += 10);
  document.querySelector("#scoreval").textContent = scoreIncreased;
}

function getNewHit() {
  random = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerHTML = random;
}

getNewHit();

function runTimer() {
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      document.querySelector("#pbtm").innerHTML =
        "<h1>Game Over &#128534;</h1>";
      clearInterval(timerInt);
    }
  }, 1000);
}

runTimer();

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 105; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble();

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickBubble = Number(dets.target.textContent);
  if (clickBubble === random) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

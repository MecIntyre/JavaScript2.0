var dino = document.getElementById('dino');
var cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) { // spacebar
    jump();
  }
});

function jump() {
  if (dino.classList != 'animate') {
    dino.classList.add('animate');
  }
  setTimeout(function() {
    dino.classList.remove('animate');
  }, 500);
}

setInterval(function() {
  var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
    alert('Game Over!');
  }
}, 10);
var drum = document.querySelectorAll('.drum').length
      for (var i =0; i<drum; i++)
      document.querySelectorAll('.drum')[i].addEventListener('click', function (){
      var buttonhtml = this.innerHTML
        playSound(buttonhtml);
        
      });
       addEventListener('keypress', function(event){
          playSound(event.key)
        })

      function playSound(key){
        switch (key) {
          case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
          break;

          case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
          break;

          case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play()
          break;

          case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play()
          break;

          case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play()
          break;

          case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play()
          break;

          case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play()
          break;

          default: cosole.log()
            
        }
      }
      function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 150); // should match animation duration
  }
}
document.querySelectorAll(".drum").forEach(btn => {
  btn.addEventListener("click", function () {
    const key = this.innerHTML.trim();
    playSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  buttonAnimation(key);
});

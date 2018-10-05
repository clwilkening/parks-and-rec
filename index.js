document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelectorAll('.sound').forEach(sound => {
    sound.addEventListener('click', selectSound);
  });
  document.querySelector('.play').addEventListener('click', play);
  document.querySelector('.pause').addEventListener('click', pause);
  document.addEventListener('keypress', handleEnter);
});

const selectSound = function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active') ;
  };
};

const play = () => {
  const select = document.querySelectorAll('.active');
  if (select.length === 0) alert('pick a sound first!');
  select.forEach(sound => {
    const key = sound.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    audio.currentTime = 0;
    audio.play();
  });
};

const pause = () => {
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
  });
};

const handleEnter = function(e) {
  var key = e.which || e.keyCode;
  if (key !== 13) return;
  const input = document.querySelector('.search').value;
  if (input.length === 0) alert("Hmm. That name isn't famliar. Try another first name.");
  let theChosenOne = null;
  characters.forEach(character => {
    if (!theChosenOne) {
      if (input.trim().toLowerCase() === character) {
        theChosenOne = character;
        const body = document.querySelector('body');
        body.style.background = `url(media/${character}.png) no-repeat center center fixed`;
        body.style.backgroundSize = 'cover';
        document.querySelector('.juke-box').style.backgroundColor = `rgba(50,50,50,.4)`
        document.querySelectorAll('.juke-box__type h4').forEach(title => {
          title.style.color = 'white';
        });
        return;
      };
    };
  });
  if (!theChosenOne) alert("Hmm. That name isn't famliar. Try another first name.");
}

const characters = ['ron', 'leslie', 'tom', 'donna', 'ann', 'chris', 'ben', 'andy'];


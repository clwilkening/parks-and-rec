document.addEventListener("DOMContentLoaded", function(event) { 
  document.querySelectorAll('.sound').forEach(sound => {
    sound.addEventListener('click', selectSound);
  });
  document.querySelector('.play').addEventListener('click', play);
});

const selectSound = function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active') ;
  };
};

const play = function () {
  console.log('clicked play')
  const select = document.querySelectorAll('active');
  select.forEach(sound => {
    console.log(sound)
  });
}
document.addEventListener("DOMContentLoaded", () => { 
  document.querySelectorAll('.sound').forEach(sound => {
    sound.addEventListener('click', selectSound);
  });
  document.querySelector('.play').addEventListener('click', play);
  document.querySelector('.pause').addEventListener('click', pause);
  document.querySelectorAll('.juke-box__type i').forEach(i => {
    i.addEventListener('click', showDescription);
  });
  document.addEventListener('keypress', handleEnter);
  document.querySelector('.description').addEventListener('click', hideDescription)
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

const showDescription = function() {
  const key = this.getAttribute("data-key");
  const modal = document.querySelector('.description');
  const title = descriptions[key].title;
  const description = descriptions[key].desc;
  const articleTitle = document.querySelector('.description h2');
  const articleDesc = document.querySelector('.description p:first-of-type');
  articleTitle.textContent = title;
  articleDesc.textContent = description;
  modal.classList.add('showing');
};

const hideDescription = () => {
  const modal = document.querySelector('.description');
  modal.classList.remove('showing');
};

const descriptions = {
  1: {
    title: "Violin",
    desc: "The violin, also known informally as a fiddle, is a wooden string instrument in the violin family. Most violins have a hollow wooden body. It is the smallest and highest-pitched instrument in the family in regular use. Smaller violin-type instruments are known, including the violino piccolo and the kit violin, but these are virtually unused."
  },
  2: {
    title: "Trumpet",
    desc: "A trumpet is a brass instrument commonly used in classical and jazz ensembles. The trumpet group contains the instruments with the highest register in the brass family. Trumpet-like instruments have historically been used as signaling devices in battle or hunting, with examples dating back to at least 1500 BC; they began to be used as musical instruments only in the late 14th or early 15th century."
  },
  3: {
    title: "Viola",
    desc: "The viola is a string instrument that is bowed or played with varying techniques. It is slightly larger than a violin and has a lower and deeper sound. Since the 18th century, it has been the middle or alto voice of the violin family, between the violin and the cello."
  },
  4: {
    title: "Oboe",
    desc: "Oboes are a family of double reed woodwind instruments. The most common oboe plays in the treble or soprano range. Oboes are usually made of wood, but there are also oboes made of synthetic materials. A soprano oboe measures roughly long, with metal keys, a conical bore and a flared bell."
  },
  5: {
    title: "Cello",
    desc: "The cello or violoncello is a string instrument. It is played by bowing or plucking its four strings, which are usually tuned in perfect fifths an octave lower than the viola: from low to high, C2, G2, D3 and A3. It is the bass member of the violin family, which also includes the violin, viola and the double bass."
  },
  6: {
    title: "Double Bass",
    desc: "The double bass, or simply the bass, is the largest and lowest-pitched bowed string instrument in the modern symphony orchestra. It is a transposing instrument and is typically notated one octave higher than tuned to avoid excessive ledger lines below the staff."
  },
  7: {
    title: "Snare Drum",
    desc: "A snare drum or side drum is a percussion instrument that produces a sharp staccato sound when the head is struck with a drum stick, due to the use of a series of stiff wires held under tension against the lower skin. Snare drums are often used in orchestras, concert bands, marching bands, parades, drumlines, drum corps, and more."
  },
  8: {
    title: "Drum Set",
    desc: "A drum kit - also called a drum set, trap set, or simply drums - is a collection of drums and other percussion instruments, typically cymbals, which are set up on stands to be played by a single player, with drumsticks held in both hands, and the feet operating pedals that control the hi-hat cymbal and the beater for the bass drum."
  }
};

const characters = ['ron', 'leslie', 'tom', 'donna', 'ann', 'chris', 'ben', 'andy'];


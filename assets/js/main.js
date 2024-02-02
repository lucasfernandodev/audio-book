const chapterTitle = document.getElementById('capitulo')
const buttonPlayPause = document.getElementById('play-pause');
const audioCapitulo = document.getElementById('audio-capitulo');
const buttonNext = document.getElementById('proximo');
const buttonPrev = document.getElementById('anterior');

const chapterSize = 10;
let isRunning = false;
let currentChapter = 1;

function tocarFaixa(){
  audioCapitulo.play();
  isRunning = true;
  buttonPlayPause.querySelector('i').classList.remove('bi-play-circle-fill');
  buttonPlayPause.querySelector('i').classList.add('bi-pause-circle-fill');
}

function pauseFaixa(){
  audioCapitulo.pause();
  isRunning = false;
  buttonPlayPause.querySelector('i').classList.add('bi-play-circle-fill');
  buttonPlayPause.querySelector('i').classList.remove('bi-pause-circle-fill');
}

function handle(){
  if(isRunning){
    pauseFaixa();
  }else{
    tocarFaixa();
  }
}

function trocarNomeFaixa(){
  chapterTitle.innerText = `Capitulo ${currentChapter}`
}

function proximaFaixa(){
  if(currentChapter === chapterSize){
    currentChapter = 1;
  }else{
    currentChapter = currentChapter + 1;
  }

  audioCapitulo.src = `./assets/books/dom-casmurro/${currentChapter}.mp3`;
  tocarFaixa();
  trocarNomeFaixa()
}

function anteriorFaixa(){
  if(currentChapter === 1){
    currentChapter = chapterSize;
  }else{
    currentChapter = currentChapter - 1;
  }

  audioCapitulo.src = `./assets/books/dom-casmurro/${currentChapter}.mp3`;
  tocarFaixa();
  trocarNomeFaixa()
}


buttonPlayPause.addEventListener('click', handle);
buttonNext.addEventListener('click', proximaFaixa)
buttonPrev.addEventListener('click', anteriorFaixa)
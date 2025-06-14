const tapa = document.querySelector('.tapa');
const bailarina = document.querySelector('.bailarina');
const btn = document.getElementById('play');
const audio = document.getElementById('audio');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', () => {
  tapa.style.transform = 'rotateX(-90deg)';
  bailarina.style.animationPlayState = 'running';
  audio.play();
  mensaje.style.display = 'block';
  btn.disabled = true;
});

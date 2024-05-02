const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Masukkan angka antara 1 dan 100.';
  } else if (guess === randomNumber) {
    message.textContent = 'Selamat! Anda menebak dengan benar!';
  } else if (guess < randomNumber) {
    message.textContent = 'Tebakan Anda terlalu rendah. Coba lagi.';
  } else if (guess > randomNumber) {
    message.textContent = 'Tebakan Anda terlalu tinggi. Coba lagi.';
  }
}

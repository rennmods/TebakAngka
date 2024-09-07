let randomNumber = Math.floor(Math.random() * 100) + 1; // Menghasilkan angka acak antara 1 dan 100
let attempts = 0; // Inisialisasi jumlah percobaan
const maxAttempts = 10; // Batas maksimal percobaan

// Fungsi untuk memeriksa tebakan pengguna
function checkGuess(guess) {
  let userGuess = parseInt(document.getElementById('guess').value); // Mengubah input menjadi bilangan bulat
  let result = document.getElementById('result'); // Mengambil elemen hasil dari DOM
  let attemptsDisplay = document.getElementById('attempts'); // Mengambil elemen percobaan dari DOM
  attempts++; // Menambah jumlah percobaan

  if (userGuess === randomNumber) { // Memeriksa apakah tebakan benar
    result.textContent = 'Selamat! Anda menebak dengan benar!'; // Pesan jika benar
    result.style.color = 'green'; // Mengubah warna teks
    endGame(); // Mengakhiri permainan
  } else if (userGuess > randomNumber) { // Jika tebakan terlalu tinggi
    result.textContent = 'Terlalu tinggi! Coba lagi.'; 
    result.style.color = 'red';
  } else { // Jika tebakan terlalu rendah
    result.textContent = 'Terlalu rendah! Coba lagi.'; 
    result.style.color = 'red';
  }

  // Menampilkan jumlah percobaan
  attemptsDisplay.textContent = `Percobaan: ${attempts} dari ${maxAttempts}`;

  // Memeriksa jika jumlah percobaan sudah melebihi batas
  if (attempts >= maxAttempts) {
    result.textContent = `Anda kalah! Angka yang benar adalah ${randomNumber}.`; 
    result.style.color = 'cyan'; 
    endGame(); // Mengakhiri permainan
  }
}

// Fungsi untuk mengakhiri permainan
function endGame() {
  document.getElementById('guess').disabled = true; // Menonaktifkan input
  document.getElementById('restart').classList.remove('hidden'); // Menampilkan tombol restart
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guess').disabled = false;
    document.getElementById('result').textContent = '';
    document.getElementById('attempts').textContent = '';

document.getElementById('restart').classList.add('hiddent');
}
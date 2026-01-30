// 1. WELCOME NAME FUNCTIONALITY
// Fungsi untuk mengganti nama saat halaman dimuat
function replaceName() {
    let user = prompt("Halo! Siapakah nama anda?", "");
    if (user != null && user != "") {
        document.getElementById("welcome-title").innerText = "Hi " + user + ", Welcome To Website";
    } else {
        document.getElementById("welcome-title").innerText = "Hi User, Welcome To Website";
    }
}

window.onload = replaceName;


// 2. FORM VALIDATION & OUTPUT
// Fungsi untuk memvalidasi form dan menampilkan hasilnya
function validateForm() {
    // Ambil value dari input berdasarkan ID
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message-text").value;
    const outputDiv = document.getElementById("output-result");
    
    // Validasi sederhana: Cek apakah ada field yang kosong
    if (name == "" || dob == "" || genderInput == null || message == "") {
        alert("Mohon lengkapi semua data!");
        return false; // Mengembalikan false agar form tidak tersubmit (refresh)
    }

    // Ambil value gender jika validasi lolos
    const gender = genderInput.value;

    // Ambil waktu sekarang untuk ditampilkan
    const now = new Date();
    const dateString = now.toUTCString();

    // Tampilkan data di kotak output (manipulasi DOM)
    outputDiv.innerHTML = `
        <div class="output-line"><strong>Current time :</strong> ${dateString}</div>
        <br>
        <div class="output-line"><strong>Nama :</strong> ${name}</div>
        <div class="output-line"><strong>Tanggal Lahir :</strong> ${dob}</div>
        <div class="output-line"><strong>Jenis Kelamin :</strong> ${gender}</div>
        <div class="output-line"><strong>Pesan :</strong> ${message}</div>
    `;

    // Reset form bisa ditambahkan di sini jika ingin form bersih setelah submit
    // document.getElementById("message-form").reset();

    // Return false sangat penting untuk mencegah halaman reload (default behavior form submit)
    // sehingga hasil output bisa terlihat di sebelah kanan
    return false;
}
const heroSection = document.getElementById('hero-section'); // Mengambil elemen dengan ID 'hero-section' dari DOM

// Array of background images
const images = [ // Mendeklarasikan array yang berisi daftar gambar latar belakang
    'img/tes1.webp', // Gambar pertama
    'img/tes2.jpg',  // Gambar kedua
    'img/tes3.jpg'   // Gambar ketiga
];

// Counter for the images
let imageIndex = 0; // Menginisialisasi index gambar yang sedang ditampilkan

// Function to change the background image
function changeBackgroundImage() { // Fungsi untuk mengubah gambar latar belakang
    heroSection.style.backgroundImage = `url(${images[imageIndex]})`; // Mengatur gambar latar belakang berdasarkan index

    // Increment the index to loop through images
    imageIndex++; // Menambah index gambar

    // Reset to the first image if index exceeds the array length
    if (imageIndex >= images.length) { // Memeriksa jika index sudah melewati panjang array
        imageIndex = 0; // Reset index ke 0
    }
}

// Set interval for changing images every 5 seconds
setInterval(changeBackgroundImage, 5000); // Mengatur interval untuk mengubah gambar setiap 5 detik

// Set the initial background image when the page loads
window.onload = changeBackgroundImage; // Mengatur gambar latar belakang awal saat halaman dimuat

//step 1: get DOM
let nextDom = document.getElementById('next'); // Mengambil elemen dengan ID 'next' dari DOM
let prevDom = document.getElementById('prev'); // Mengambil elemen dengan ID 'prev' dari DOM

let carouselDom = document.querySelector('.carousel'); // Mengambil elemen carousel
let SliderDom = carouselDom.querySelector('.carousel .list'); // Mengambil daftar gambar dalam carousel
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail'); // Mengambil elemen thumbnail dalam carousel
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item'); // Mengambil semua item thumbnail
let timeDom = document.querySelector('.carousel .time'); // Mengambil elemen waktu dari carousel

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Menambahkan item thumbnail pertama ke border
let timeRunning = 3000; // Mengatur waktu untuk menjalankan animasi
let timeAutoNext = 7000; // Mengatur waktu untuk auto next

nextDom.onclick = function(){ // Menangani klik pada tombol 'next'
    showSlider('next'); // Memanggil fungsi showSlider dengan parameter 'next'
}

prevDom.onclick = function(){ // Menangani klik pada tombol 'prev'
    showSlider('prev'); // Memanggil fungsi showSlider dengan parameter 'prev'
}
let runTimeOut; // Variabel untuk menyimpan timeout
let runNextAuto = setTimeout(() => { // Mengatur timeout untuk mengklik 'next' secara otomatis
    next.click(); // Menyimulasikan klik pada tombol 'next'
}, timeAutoNext) // Berdasarkan waktu yang telah ditentukan

function showSlider(type){ // Fungsi untuk menampilkan slider
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item'); // Mengambil semua item slider
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item'); // Mengambil semua item thumbnail
    
    if(type === 'next'){ // Jika tipe adalah 'next'
        SliderDom.appendChild(SliderItemsDom[0]); // Memindahkan item pertama ke akhir daftar slider
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]); // Memindahkan item thumbnail pertama ke akhir
        carouselDom.classList.add('next'); // Menambahkan kelas 'next' untuk efek transisi
    }else{ // Jika tipe adalah 'prev'
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]); // Memindahkan item terakhir ke awal daftar slider
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]); // Memindahkan item thumbnail terakhir ke awal
        carouselDom.classList.add('prev'); // Menambahkan kelas 'prev' untuk efek transisi
    }
    clearTimeout(runTimeOut); // Menghapus timeout sebelumnya
    runTimeOut = setTimeout(() => { // Mengatur timeout baru untuk menghapus kelas transisi
        carouselDom.classList.remove('next'); // Menghapus kelas 'next'
        carouselDom.classList.remove('prev'); // Menghapus kelas 'prev'
    }, timeRunning); // Berdasarkan waktu yang telah ditentukan

    clearTimeout(runNextAuto); // Menghapus timeout auto next sebelumnya
    runNextAuto = setTimeout(() => { // Mengatur timeout untuk mengklik 'next' secara otomatis
        next.click(); // Menyimulasikan klik pada tombol 'next'
    }, timeAutoNext) // Berdasarkan waktu yang telah ditentukan
}

const slider = document.querySelector(".slider"); // Mengambil elemen slider
const form = document.querySelector(".form"); // Mengambil elemen form
let mouseDownAt = 0; // Variabel untuk menyimpan posisi mouse saat ditekan
let left = 0; // Variabel untuk menyimpan posisi horizontal elemen

slider.onmousedown = (e) => { // Menangani event mouse down pada slider
    mouseDownAt = e.clientX; // Menyimpan posisi mouse saat ditekan
    console.log(mouseDownAt); // Mencetak posisi mouse
};
slider.onmouseup = () => { // Menangani event mouse up pada slider
    mouseDownAt = 0; // Mengatur ulang posisi mouse
    slider.style.userSelect = 'unset'; // Mengizinkan pemilihan teks
    slider.style.cursor = 'unset'; // Mengatur cursor ke default
    form.style.pointerEvents = 'unset'; // Mengizinkan interaksi dengan form
    form.classList.remove('left'); // Menghapus kelas 'left'
    form.classList.remove('right'); // Menghapus kelas 'right'
}
slider.onmousemove = e => { // Menangani event mouse move pada slider
    if(mouseDownAt == 0) return; // Jika mouse tidak ditekan, keluar dari fungsi
    slider.style.userSelect = 'none'; // Menonaktifkan pemilihan teks
    slider.style.cursor = 'grab'; // Mengubah cursor menjadi 'grab'
    form.style.pointerEvents = 'none'; // Menonaktifkan interaksi dengan form
    
    if(e.clientX > mouseDownAt){ // Jika posisi mouse sekarang lebih besar dari posisi saat ditekan
        form.classList.add('left'); // Menambahkan kelas 'left'
        form.classList.remove('right'); // Menghapus kelas 'right'
    }else if(e.clientX < mouseDownAt){ // Jika posisi mouse sekarang lebih kecil dari posisi saat ditekan
        form.classList.remove('left'); // Menghapus kelas 'left'
        form.classList.add('right'); // Menambahkan kelas 'right'
    }

    let speed = 3; // Mengatur kecepatan pergerakan
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed); // Menghitung posisi horizontal sementara
    let leftLimit = form.offsetWidth - slider.offsetWidth / 2; // Menghitung batas kiri

    // Memeriksa apakah posisi sementara dalam batas yang diperbolehkan
    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){ 
        form.style.setProperty('--left', left + 'px'); // Mengatur properti CSS untuk posisi horizontal
        left = leftTemporary; // Mengupdate posisi horizontal
        mouseDownAt = e.clientX; // Mengupdate posisi mouse saat ini
    }
}

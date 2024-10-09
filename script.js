const heroSection = document.getElementById('hero-section');

// Array of background images
const images = [
    'img/tes1.webp',
    'img/tes2.jpg',
    'img/tes3.jpg'
];

// Counter for the images
let imageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url(${images[imageIndex]})`;

    // Increment the index to loop through images
    imageIndex++;
    
    // Reset to the first image if index exceeds the array length
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
}

// Set interval for changing images every 5 seconds
setInterval(changeBackgroundImage, 5000);

// Set the initial background image when the page loads
window.onload = changeBackgroundImage;

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onClick = function(){
    showSlider('next');
}

prevDom.onClick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    },timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
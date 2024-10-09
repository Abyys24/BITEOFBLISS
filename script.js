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

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

const slider = document.querySelector(".slider");
const form = document.querySelector(".form");
let mouseDownAt = 0;
let left = 0;
slider.onmousedown = (e) => {
    mouseDownAt = e.clientX;
    console.log(mouseDownAt);
};
slider.onmouseup = () => {
    mouseDownAt = 0;  
    slider.style.userSelect = 'unset';
    slider.style.cursor = 'unset';
    form.style.pointerEvents = 'unset';
    form.classList.remove('left');
    form.classList.remove('right');
}
slider.onmousemove = e => {
    if(mouseDownAt == 0) return;
    slider.style.userSelect = 'none';
    slider.style.cursor = 'grab';
    form.style.pointerEvents = 'none';
    
    if(e.clientX > mouseDownAt){
        form.classList.add('left');
        form.classList.remove('right');
    }else if(e.clientX < mouseDownAt){
        form.classList.remove('left');
        form.classList.add('right');
    }

    let speed = 3;
    let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    let leftLimit = form.offsetWidth - slider.offsetWidth / 2;

    
    if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
        form.style.setProperty('--left', left + 'px');
        left = leftTemporary;
        mouseDownAt = e.clientX;
    }

}
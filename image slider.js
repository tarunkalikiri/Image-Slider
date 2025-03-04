document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
        "https://revsportz.in/wp-content/uploads/2023/05/MS-Dhoni-3.jpeg",
        "https://www.livemint.com/lm-img/img/2024/07/15/600x338/ANI-20240701074-0_1720450579604_1721018100800.jpg"
    ];
    
    let currentIndex = 0;
    const imageElement = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    function updateImage() {
        imageElement.src = images[currentIndex];
    }
    
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    
    updateImage(); // Initialize with the first image
});
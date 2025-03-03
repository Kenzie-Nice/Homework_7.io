class PhotoSlide {
    constructor(title, image, description, author, year) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

const slides = [
    new PhotoSlide("Freedom", "141104-berlin-wall-neely-cover.jpg", "Piece of Berlin Wall getting torn down", "Dorothea Lange", "1989"),
    new PhotoSlide("Broken", "The-first-section-of-the-Berlin-Wall-was-torn-down-by-crowds-on-the-morning-of-November-10th-1989-530033.jpg", "Berlin Wall", "Unknown", "1989"),
    new PhotoSlide("Spray", "xxberlin-wall-archive-videoSixteenByNineJumbo1600.jpg", "Unknown", "Unknown", "1989"),
    new PhotoSlide("Stand", "030-56a040383df78cafdaa0adf6.jpg", "The famous Tank-man photo, taken during the Tiananmen protests", "John Doe", "1989"),
    new PhotoSlide("Flag", "01_VIME4375-1989CL12.jpg", "Someone holds a red and gold flag as the winds rip by at the Tiananmen protests", "John Doe", "1989"),
];

function preloadImages() {
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
    });
}

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * slides.length);
    const slide = slides[randomIndex];
    document.getElementById("photo").src = slide.image;
    document.getElementById("title").textContent = slide.title;
    document.getElementById("description").textContent = slide.description;
    document.getElementById("author").textContent = slide.author;
    document.getElementById("year").textContent = slide.year;
}

// Ensure preloadImages is called on load
window.onload = preloadImages;

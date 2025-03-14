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
    new PhotoSlide("Freedom", "141104-berlin-wall-neely-cover.jpg", "Piece of berlin wall getting torn down", "Dorothea Lange", "1989"),
    new PhotoSlide("Freedom", "xxberlin-wall-archive-videoSixteenByNineJumbo1600.jpg", "Piece of berlin wall getting torn down", "Unknown", "1989"),
    new PhotoSlide("Freedom", "030-56a040383df78cafdaa0adf6.jpg", "Tank-Man", "Unknown", "1989"),
    new PhotoSlide("Broken", "The-first-section-of-the-Berlin-Wall-was-torn-down-by-crowds-on-the-morning-of-November-10th-1989-530033.jpg", "Berlin Wall", "Unknown", "1989")
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

preloadImages();

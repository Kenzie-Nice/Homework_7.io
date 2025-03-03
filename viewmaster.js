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
    new PhotoSlide("Freedom", "141104-berlin-wall-neely-cover.jpg", "An iconic photo of the Great Depression.", "Dorothea Lange", "1936"),
    new PhotoSlide("Broken", "The-first-section-of-the-Berlin-Wall-was-torn-down-by-crowds-on-the-morning-of-November-10th-1989-530033.jpg", "A single protester stands before a column of tanks in Tiananmen Square.", "Unknown", "1989"),
    new PhotoSlide("Spray", "xxberlin-wall-archive-videoSixteenByNineJumbo1600.jpg", "Unknown", "2016"),
    new PhotoSlide("Black Lives Matter Protest", "blm_protest.jpg", "A powerful moment from a BLM protest.", "John Doe", "2020"),
    new PhotoSlide("Afghan Girl", "afghan_girl.jpg", "A striking portrait of a refugee.", "Steve McCurry", "1984")
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
displayRandomImage();

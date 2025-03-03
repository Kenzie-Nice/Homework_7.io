<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Virtual ViewMaster</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 20px;
        }
        #image-container {
            display: inline-block;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        #image-container img {
            width: 300px;
            height: auto;
            margin-top: 20px;
            border-radius: 5px;
        }
        button {
            margin-top: 20px;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #007bff;
            color: white;
            border-radius: 5px;
        }
        button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h1>Virtual ViewMaster</h1>
    <div id="image-container">
        <img id="photo" src="" alt="Social Justice Image" onerror="this.src='placeholder.jpg'">
        <h2 id="title"></h2>
        <p id="description"></p>
        <p><strong>Author:</strong> <span id="author"></span></p>
        <p><strong>Year:</strong> <span id="year"></span></p>
    </div>
    <button onclick="displayRandomImage()">Next Image</button>

    <script>
        // Class definition for PhotoSlide
        class PhotoSlide {
            constructor(title, image, description, author, year) {
                this.title = title;
                this.image = image;
                this.description = description;
                this.author = author;
                this.year = year;
            }
        }

        // Array to store multiple objects of PhotoSlide
        const slides = [
            new PhotoSlide("Freedom", "141104-berlin-wall-neely-cover.jpg", "An iconic photo of the Great Depression, showing people enduring hardship.", "Dorothea Lange", "1936"),
            new PhotoSlide("Broken", "The-first-section-of-the-Berlin-Wall-was-torn-down-by-crowds-on-the-morning-of-November-10th-1989-530033.jpg", "A single protester stands before a column of tanks in Tiananmen Square, symbolizing defiance against oppression.", "Unknown", "1989"),
            new PhotoSlide("Spray", "xxberlin-wall-archive-videoSixteenByNineJumbo1600.jpg", "A protester sprays graffiti on the Berlin Wall, symbolizing freedom of expression.", "Unknown", "2016"),
            new PhotoSlide("Black Lives Matter Protest", "blm_protest.jpg", "A powerful moment from a Black Lives Matter protest, calling for justice and equality.", "John Doe", "2020"),
            new PhotoSlide("Afghan Girl", "afghan_girl.jpg", "A striking portrait of an Afghan refugee, symbolizing the plight of displaced peoples.", "Steve McCurry", "1984")
        ];

        // Preloading images to ensure faster display
        function preloadImages() {
            slides.forEach(slide => {
                const img = new Image();
                img.src = slide.image;
            });
        }

        // Function to display a random image and its details
        function displayRandomImage() {
            const randomIndex = Math.floor(Math.random() * slides.length);
            const slide = slides[randomIndex];
            document.getElementById("photo").src = slide.image;
            document.getElementById("title").textContent = slide.title;
            document.getElementById("description").textContent = slide.description;
            document.getElementById("author").textContent = slide.author;
            document.getElementById("year").textContent = slide.year;
        }

        // Preload images and display a random one on page load
        preloadImages();
        displayRandomImage();
    </script>
</body>
</html>

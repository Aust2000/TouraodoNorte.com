// Setting the gallery images

var galleryImages = document.getElementsByClassName("galleryPics");

// Adding images zoom

for (let i = 0; i < galleryImages.length; i++)
{
    galleryImages[i].addEventListener("click", function(){imageZoom()});
}

function imageZoom()
{
    // A function that creates a new element that shows the image in big scale
    let box = document.createElement("div");
    let bigImage = document.createElement("img");
    box.appendChild(bigImage);

    let firstElement = document.body.firstChild;
    document.body.insertBefore(box, firstElement);
    
    box.style.width = "100%";
    box.style.height = "100%";
    box.style.backgroundColor = "black";
    
}
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
    let 
    document.body.insertBefore(box, )

    
}
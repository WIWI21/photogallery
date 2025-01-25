function upDate(previewPic) {
    console.log("Mouseover triggered!");

    // Log alt and src attributes of the previewPic image
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Change the content of the div with id 'image'
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image of the div with id 'image'
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}
function undo() {
    console.log("Mouseout triggered!");

    // Reset the text and background image of the div with id 'image'
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}

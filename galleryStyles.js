var largeImage = document.getElementById("large_image")
console.log(largeImage);

var thumbnails = document.getElementsByClassName("thumbnail");
	for (var i = 0; i<thumbnails.length; i++) {
		console.log(thumbnails[i]);
}

for (i = 0; i<thumbnails.length; i++) 
{
	thumbnails[i].addEventListener("click", function(){
		largeImage.innerHTML = this.innerHTML;
	})
}
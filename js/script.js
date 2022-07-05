function showAllImages(imageDiv){
	var image = document.getElementsByClassName(imageDiv);
	if(image.style.display == "none")
	{
		image.style.display = "block";
	}else if(x.style.display == "block"){
		image.style.display = "none";
	}else{
		image.style.display = "block";
	}
}

function showImage(imageId){
	var x = document.getElementById(imageId);
	if(x.style.display == "none")
	{
		x.style.display = "block";
	}else if(x.style.display == "block"){
		x.style.display = "none";
	}else{
		x.style.display = "block";
	}
}
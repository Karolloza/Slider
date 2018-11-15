document.addEventListener("DOMContentLoaded", function() {

	// images
	const imagesSrc = [];
	imagesSrc[0] = 'images/Medicine-Lake.jpg';
	imagesSrc[1] = 'images/penanjakan.jpg';
	imagesSrc[2] = 'images/shutterstock.jpg';
	imagesSrc[3] = 'images/treesAlongTheRiver.jpg';

	const displayedImage = document.querySelector('.displayedImage');

	let countImages = 0;
	const prevImgBtn = document.querySelector('.prevPicture');
	const nextImgBtn = document.querySelector('.nextPicture');

	displayedImage.src = imagesSrc[countImages]

	function prevImg() {
		countImages --;
		if (countImages < 0 ) {
			countImages = 3;
		}
			displayedImage.src = imagesSrc[countImages]
		return countImages;
	}
	function prevImgKeyPress(e) {
		if( e.key == "ArrowLeft") {
			countImages --;
			if (countImages < 0 ) {
			countImages = 3;
		}
			displayedImage.src = imagesSrc[countImages]
		return countImages;
		}
	}

	function nextImg() {

		displayedImage.classList.add('fadeIn');
		countImages ++;
		if( countImages === 4 ) {
			countImages = 0;
		}
		displayedImage.src = imagesSrc[countImages];

		return countImages;
	}
	function nextImgKeyPress(e) {

		if(e.key =="ArrowRight") {
			countImages ++;
			if( countImages === 4 ) {
			countImages = 0;
		}
		displayedImage.src = imagesSrc[countImages]
		return countImages;
		}
		
	}

	prevImgBtn.addEventListener('click', prevImg);
	document.addEventListener('keydown', prevImgKeyPress);
	nextImgBtn.addEventListener('click', nextImg);
	document.addEventListener('keydown', nextImgKeyPress);


	

});
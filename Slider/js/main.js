document.addEventListener("DOMContentLoaded", function() {

	// images
	const imagesSrc = [
		'images/Medicine-Lake.jpg',
		'images/penanjakan.jpg',
		'images/shutterstock.jpg',
		'images/treesAlongTheRiver.jpg',
		];

	let countImages = 0;

	const displayedImage = document.querySelector('.displayedImage');
	const prevImgBtn = document.querySelector('.prevPicture');
	const nextImgBtn = document.querySelector('.nextPicture');

	displayedImage.src = imagesSrc[countImages];

	function prevImg() {
		countImages--;
		if (countImages < 0 ) {
			countImages = 3;
		}

		displayedImage.src = imagesSrc[countImages];
		return countImages;
	}
	function prevImgKeyPress(e) {
		if (e.key === "ArrowLeft") {
			countImages--;
			if (countImages < 0 ) {
			countImages = 3;
		}
			displayedImage.src = imagesSrc[countImages];
		return countImages;
		}
	}

	function nextImg() {
		countImages++;
		if (countImages === 4 ) {
			countImages = 0;
		}
		displayedImage.src = imagesSrc[countImages];
		displayedImage.animate([
			{ opacity: 0},
			{ opacity: 1},
		], {
			duration: 3000,
		});

		return countImages;
	}

	function nextImgKeyPress(e) {
		if (e.key === "ArrowRight") {
			countImages++;
			if (countImages === 4 ) {
			countImages = 0;
		}

		displayedImage.src = imagesSrc[countImages];
		return countImages;
		}

	}

	prevImgBtn.addEventListener('click', prevImg);
	document.addEventListener('keydown', prevImgKeyPress);
	nextImgBtn.addEventListener('click', nextImg);
	document.addEventListener('keydown', nextImgKeyPress);




});

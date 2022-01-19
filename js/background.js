const imgUrl = ['img/a.jpg', 'img/b.jpg', 'img/c.jpg', 'img/d.jpg', 'img/e.jpg', 'img/f.jpg', 'img/g.jpg', 'img/h.jpg', 'img/i.jpg', 'img/j.jpg', 'img/k.jpg', 'img/l.jpg'];

function changeImg() {
	const $body = document.querySelector('body');

	const randomNum = Math.floor(Math.random() * imgUrl.length);
	const $bgImg = document.createElement('img');
	$bgImg.classList.add('background');
	$bgImg.src = imgUrl[randomNum];

	$body.appendChild($bgImg);
}

changeImg();

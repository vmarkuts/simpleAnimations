var btnRound = $('#round');
var btnShadow = $('#shadow');
var btnRenault = $('#renault');
var btnWave = $('#wave');
var shadow = false;
var count = 1;
var timeCounter = 0;
var imgLink = '<img src="https://image.ua/wp-content/uploads/ae88b37a1f9083d2339426b0eb1057de_1579709854-554x466.jpg">';
init(3);
var firstZe, midZe, lastZe;
updatePositions();

btnRound.click(function () {
	if (!images.hasClass('zelenskiyRound')) {
		btnRound.text('Make not round');
		images.addClass('zelenskiyRound');
	} else {
		images.removeClass('zelenskiyRound');
		btnRound.text('Round Zelenskiy');
	}
});

btnShadow.click(function(){
	shadow ? $(this).text('Add Some Shadow') : $(this).text('Remove Shadow');
	images.toggleClass('zelenskiyShadow');
	shadow = !shadow;
});

btnRenault.click(function(){
	if (count === 1) {
		zeUp(midZe);
		return count = 2;
	}
	if (count === 2) {
		zeDown(midZe);
		removeStyle(midZe);
		zeUp(firstZe);
		setTimeout(function(){zeUp(lastZe);}, 200);
		return count = 3;
	} 
	if (count === 3) {
		zeDown(firstZe);
		removeStyle(firstZe)
		zeDown(lastZe);
		removeStyle(lastZe);
		return count = 1;
	}
});

function removeStyle (image) {
	image.attr('style','');
}

btnWave.click(function(){
	if (count !== 1) {
		alert('put zelenskiy on earth firstly');
	} else {
		timeCounter = 0;
		zeWaveUp();
		zeWaveDown();
		for (var i = 0; i < images.length; i++) {
			setTimeout(function(){removeStyle(images);},timeCounter)
		}
		timeCounter = 0;
	}
});

function zeWaveUp() {
	for (let i = 0; i < $(images).length; i++ , timeCounter+=200) {
		setTimeout(function(){zeUp($(images)[i]);}, timeCounter);
	}
}

function zeWaveDown() {
	for (let i = 0; i < $(images).length; i++ , timeCounter+=200) {
		setTimeout(function(){zeDown($(images)[i]);}, timeCounter);
	}
}

function zeUp(image) {
	$(image).css({
		transform: 'scaleX(-1)',
		webkitTransform: 'scaleX(-1)',
		width: '300px'
	});
}

function zeDown (image) {
	$(image).css({
		transform: 'scaleX(+1)',
		webkitTransform: 'scaleX(+1)',
		width: '250px'
	});
}

$('button').click(function(){
	var text = $(this).text();
	// console.log('u clicked ' + text);
});

$('input[type="text"]').keypress(function(event){
    if(event.which === 13) {
        alert('u hit enter');
    }
});

$('input').on('keypress',function(){
    console.log('keypressed!');
});

$('input').on('mouseenter',function(){
    console.log('mouse enter!');
});

function init(num) {
	for (var i = 0; i < num; i++) {
		addZe();
	}
}

function addZe () {
	$('#zeImgArray').append(imgLink);
	updatePositions();
}

function removeZe() {
	if (images.length !== 1) {
		$('#zeImgArray img:last-of-type').remove();
		updatePositions();
	} else {
		alert('You cannot delete the last of the best President');
	}
}

$('#addImage').click(function(){
	addZe();
});

$('#removeImage').click(function(){
	removeZe();
});

function updatePositions () {
	var str = '';
	images = $('#zeImgArray img');
	firstZe = $('#zeImgArray img:first-of-type');
	var X = Math.round(images.length / 2);
	str = '#zeImgArray img:eq(-' + X + ')';
	midZe = $(str);
	lastZe = $('#zeImgArray img:last-of-type');
}

images.on('mouseover',function(){
	$(this).addClass('zeAnimation');
});

images.on('mouseout',function(){
	$(this).removeClass('zeAnimation');
});

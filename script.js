var btnRound = $('#round');
var btnShadow = $('#shadow');
var btnRenault = $('#renault');
var btnWave = $('#wave');
var btnAddZe = $('#addImage');
var btnRemoveZe = $('#removeImage');
var inputZe = $('input[type="number"]');
var bulkAddZe = $('.bulkInput button');
var numValidation = $('#numValidation');
var errorMessage = $('#errorMessage');
var btnReset = $('#reset');
var shadowImages = false;
var count = 1;
var timeCounter = 0;
var imgLink = '<img src="https://image.ua/wp-content/uploads/ae88b37a1f9083d2339426b0eb1057de_1579709854-554x466.jpg">';
var firstZe, midZe, lastZe;
var roundImages = false;
var totalImages = 3;

addZe(3);

btnReset.click(function(){
	location.reload();
});

btnAddZe.click(function(){
	addZe(1);
});

bulkAddZe.click(function(){
	addZe(inputZe.val());
});

btnRemoveZe.click(function(){
	removeZe();
});

btnRound.click(function () {
	if (!roundImages) {
		$(this).text('Make not round');
		images.addClass('zelenskiyRound');
	} else {
		images.removeClass('zelenskiyRound');
		$(this).text('Round Zelenskiy');
	}
	roundImages = !roundImages;
});

btnShadow.click(function(){
	if (!shadowImages) {
		$(this).text('Remove Shadow');
		images.addClass('zelenskiyShadow');
	} else {
		$(this).text('Add Some Shadow');
		images.removeClass('zelenskiyShadow');
	}
	shadowImages = !shadowImages;
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

inputZe.keypress(function(event){
    if(event.which === 13) {
    	if(inputZe.val() > 0 && inputZe.val() < 101) {
        	addZe(inputZe.val());
        }
    }
});

inputZe.change(function() {
	var value = $(this).val();
	if (value < 1) {
		$(this).val(1);
		numValidation.text('Value cannot be lower than 1');
		setTimeout(function(){
			numValidation.text('');
		}, 1500);
	}
	if (value > 100) {
		$(this).val(100);
		numValidation.text('Value cannot be greater than 100');
		setTimeout(function(){
			numValidation.text('');
		}, 1500);
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

function addZe(num) {
	calcTotalImages();
	var check = totalImages + Number(num);
	if (check < 1001) {
		for (var i = 0; i < num; i++) {
			$('#zeImgArray').append(imgLink);
		}
		updatePositions();
		zeRoundChecking();
		zeShadowCheking();
	} else {
		tooManyImages();
	}
	calcTotalImages();
}

function calcTotalImages() {
	totalImages = $('#zeImgArray img').length;
}

function removeZe() {
	if (images.length !== 1) {
		$('#zeImgArray img:last-of-type').remove();
		updatePositions();
	} else {
		alert('You cannot delete the best president');
	}
}

function updatePositions () {
	var str = '';
	images = $('#zeImgArray img');
	firstZe = $('#zeImgArray img:first-of-type');
	var X = Math.round(images.length / 2);
	str = '#zeImgArray img:eq(-' + X + ')';
	midZe = $(str);
	lastZe = $('#zeImgArray img:last-of-type');
	zeHover();
}

function zeHover() {
	images.on('mouseover',function(){
		$(this).addClass('zeAnimation');
	});

	images.on('mouseout',function(){
		$(this).removeClass('zeAnimation');
	});
}

function zeRoundChecking() {
	if (roundImages) {
		images.addClass('zelenskiyRound');
	} else {
		images.removeClass('zelenskiyRound');
	}
}

function zeShadowCheking() {
	if (shadowImages) {
		images.addClass('zelenskiyShadow');
	} else {
		images.removeClass('zelenskiyShadow');
	}
}

function removeStyle (image) {
	image.attr('style','');
}

function tooManyImages() {
	//make visible
	errorMessage.toggleClass('invisible');
	for (let i = 1000; i > 0; i--) {
		var str = i/100;
		setTimeout(function() {
			errorMessage.css('opacity',str);
		}, 2250);
	}
	//make invisible
	setTimeout(function() {
		errorMessage.toggleClass('invisible');
	}, 2500);
	errorMessage.attr('style','');
}
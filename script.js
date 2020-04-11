var btnRound = $('#round');
var btnShadow = $('#shadow');
var btnRenault = $('#renault');
var zelenskiyImage = $('img');
var zelenskiyMidImage = $('#middle');
var btnWave = $('#wave');
var shadow = false;
var count = 1;
//условие ? выражение1 : выражение2

btnRound.click(function () {
	if (!zelenskiyImage.hasClass('zelenskiyRound')) {
		
		btnRound.text('Make not round');
		zelenskiyImage.addClass('zelenskiyRound');
	} else {
		zelenskiyImage.removeClass('zelenskiyRound');
		btnRound.text('Round Zelenskiy');
	}
});

btnShadow.click(function(){
	shadow ? $(this).text('Add Some Shadow') : $(this).text('Remove Shadow');
	zelenskiyImage.toggleClass('zelenskiyShadow');
	shadow = !shadow;
});

//addEventListener() = on() in jQuery

btnRenault.click(function(){
	if (count === 1) {
		zeUp(zelenskiyMidImage);
		return count = 2;
	}
	if (count === 2) {
		zeDown(zelenskiyMidImage);
		zeUp('img:first-of-type');
		setTimeout(function(){zeUp('img:last-of-type');}, 200);
		return count = 3;
	} 
	if (count === 3) {
		zeDown('img:first-of-type');
		zeDown('img:last-of-type');
		return count = 1;
	}
});

btnWave.click(function(){
	if (count !== 1) {
		alert('put zelenskiy on earth firstly');
	} else {
		zeWaveUp();
		zeWaveDown();
	}
});

function zeWaveUp() {
	for (let i = 0, j = 0; i < $('img').length; i++ , j+=200) {
		setTimeout(function(){zeUp($('img')[i]);}, j);
	}
}

function zeWaveDown() {
	for (let i = 0, j = 500; i < $('img').length; i++ , j+=200) {
		setTimeout(function(){zeDown($('img')[i]);}, j);
	}
}

function zeUp(image) {
	$(image).css({
		transform: 'scaleX(-1)',
		-webkit-transform: 'scaleX(-1)',
		width: '300px'
	});
}

function zeDown (image) {
	$(image).css({
		transform: 'scaleX(+1)',
		-webkit-transform: 'scaleX(+1)',
		width: '250px'
	});
}

$('button').click(function(){
	var text = $(this).text();
	console.log('u clicked ' + text);
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

$('img').on('mouseover',function(){
    $(this).addClass('zeAnimation');
});


$('img').on('mouseout',function(){
    $(this).removeClass('zeAnimation');
});



// $('input[type="text"]').keypress(function(){
// 	console.log('u pressed the key');
// });

// zelenskiyImage.on().attr('src','https://cdn.riastatic.com/photosnewr/ria/news_common/avtomobil-nedeli-renault-k-ze__246923-1680x0.jpg');
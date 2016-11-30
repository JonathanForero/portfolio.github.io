$(document).ready(main);

function main(){	
	init();
}

function init(){
  $('.skillset').hide();
  $('.skillset').fadeIn(5000);
  $('.projects').hide();
  $('.projects-button').on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');    
  });
}

jQuery(document).ready(function() {

	container = $('.container');
	cover = $('.cover');
	play = $('#play');	
	pause = $('#pause');
	mute = $('#mute');
	muted = $('#muted');
	close = $('#close');
	song = new Audio('music/starBoy.ogg','music/starBoy.mp3');
	duration = song.duration;	
	play.hide();
	muted.hide();

	if (song.canPlayType('audio/mpeg;')) {
    	song.type= 'audio/mpeg';
    	song.src= 'music/starBoy.mp3';
	} else {
    	song.type= 'audio/ogg';
    	song.src= 'music/starBoy.ogg';
	}

	song.play();

	play.on('click', function(e) {
		e.preventDefault();
		togglePlay();
		song.play();
		$('#seek').attr('max',song.duration);
	});


	pause.on('click', function(e) {
		e.preventDefault();
		togglePlay();
		song.pause();	
	});

	mute.on('click', function(e) {
		e.preventDefault();
		toggleMute();
		song.volume = 0;		
	});

	muted.on('click', function(e) {
		e.preventDefault();
		toggleMute();
		song.volume = 1;		
	});

	function togglePlay(){
		play.toggle();
		pause.toggle();
	}

	function toggleMute(){
		mute.toggle();
		muted.toggle();
	}

	$('#close').click(function(e) {
		e.preventDefault();		
		song.pause();
		song.currentTime = 0;
		play.show();
		pause.hide();		
	});	
});

$('[data-toggle="open-modal"]').on('click', function(){
	$('.modal').addClass('is-open');
	$('body').addClass('lock');
});
$('[data-toggle="close-modal"]').on('click', function(){
	$('.modal').removeClass('is-open');
	$('body').removeClass('lock');
});

$('[data-fill="open-form"]').on('click', function(){
	$('.form').addClass('is-open');
	$('body').addClass('lock');
});
$('[data-fill="close-form"]').on('click', function(){
	$('.form').removeClass('is-open');
	$('body').removeClass('lock');
});

var wow = new WOW(
	{
		boxClass:'wow',
		animateClass:'animated',
		offset:0,
		mobile:false,
		live:true,
	}
);
wow.init();
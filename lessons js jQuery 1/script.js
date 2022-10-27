// $('.box').text('tsts text');
// $('.box').css('backgroundColor', 'red');
// $('.box').addClass('alert');
// $('.box').removeClass('alert');

// console.log($('.box').css('width', '200px'));
// console.log($('.box').css('backgroundColor'));


// $	('.box').click(function () {
// 			alert(`fff`)
// });


// $('.box').append(' yura');
// $('.box').append('<p>text</p>');
// $('.box').append('<p class = "white">text</p>');

// $('.box').after('online')


//  animation


$('#fadeOutBtn').click(function() {
 $('.box').fadeOut(200);
});


$('#fadeInBtn').click(function() {
	$('.box').fadeIn(200);
 });
 
 
 $('#fadeToggleBtn').click(function() {
	$('.box').fadeToggle(200);
 });
 
 
 
 $('#hideBtn').click(function() {
	$('.box').hide(700);
 });
 
  
 $('#showBtn').click(function() {
	$('.box').toggle(700);
 });
 
 
 $('#toggleBtn').click(function() {
	$('.box').toggle(700);
 });
 
 
 $('#slideupBtn').click(function() {
	$('.box').slideUp(700);
 });
 
 
 
 
 $('#sliddownBtn').click(function() {
	$('.box').slideDown(700);
 });
 
 
 $('#slidetoggleBtn').click(function() {
	$('.box').slideToggle(700);
 });
 
 

 $('.btns').hide(0);
 



 let opened = false;

 $('.arrow').click(function() {
	if(opened == false) {
		$('.btns').slideToggle(200);
		$('.arrow img').css('transform', 'rotate(180deg)');
		opened = true;
	} else{
		$('.btns').slideToggle(200);
		$('.arrow img').css('transform', 'rotate(0)');
		opened = false
	}
 });


 
 $('#red').click(function() {
	$('.box').fadeOut(200);
 });

 $('#yellow').click(function() {
	$('.box').slideToggle(200);
 });

 
 $('#green').click(function() {
	$('.box').css('width', '100%');
	$('.box').css('height', '100%');


 });

 
 
 
 
 







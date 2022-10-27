$('#add').click(function () {

	$('.todoContainer').append(`<div>${$('#todoValu').val()}</div>`);
  $('#todoValu').val(' ');

});


$('#clearBtn').click(function () {
	$('.todoContainer').empty('');
});

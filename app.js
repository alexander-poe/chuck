$(function() {

var nameURL = 'https://api.icndb.com/jokes/random';

$('body').on('click', '#newquote', function(event) {
$.ajax({
	url: nameURL,
	data: {
		format: 'json'
	},
	error: function() {
		$('#quotes').html('<p> error, abort </p>');
	},
	success: function(ha) {
		$('#quotes').html('<p>' + ha.value.joke + '</p>');
	},
	type: 'GET'
  });
});

console.log(ha.value.joke);

}); 
$(document).ready(function() {
    console.log( "ready" );

    var cityArray = ['NYC', 'SF', 'LA', 'ATX', 'SYD' ];

    var picArray = ['url(images/nyc.jpg)', 'url(images/sf.jpg)', 'url(images/la.jpg)', 'url(images/austin.jpg)', 'url(images/sydney.jpg)'];

    var option = '';

	for (var i=0; i <cityArray.length; i++) {
	    	$('<option/>').val(cityArray[i]).html(cityArray[i]).appendTo('#city-type')

	}


	function changeDisplay() {
			var city = $('#city-type').val();

			switch (city) {
			case 'NYC':
			$('body').css('background-image', picArray[0]);

				break;

			case 'SF':
			$('body').css('background-image', picArray[1]);

				break;

			case 'LA':
			$('body').css('background-image', picArray[2]);

				break;

			case 'ATX':
			$('body').css('background-image', picArray[3]);

				break;

			case 'SYD':
			$('body').css('background-image', picArray[4]);

				break;
			}
	}		


	$('#city-type').change(changeDisplay);

});	




$(document).ready(function() {

	//store city names in array cityArray
    var cityArray = ['NYC', 'SF', 'LA', 'ATX', 'SYD' ];

    //store images of city in array picArray
    var picArray = ['url(images/nyc.jpg)', 'url(images/sf.jpg)', 'url(images/la.jpg)', 'url(images/austin.jpg)', 'url(images/sydney.jpg)'];

    var option = '';
    
    //make values from array cityArray available in dropdown list
	for (var i=0; i <cityArray.length; i++) {
	    	$('<option/>').val(cityArray[i]).html(cityArray[i]).appendTo('#city-type')

	}

	//change the background image to the appropriate city image when user selects a city from the dropdown (if user selects NYC, the picture of New York is displayed etc)
	//pull the image from the array
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

//run function changeDisplay when user selects a city from drop down
	$('#city-type').change(changeDisplay);

});	




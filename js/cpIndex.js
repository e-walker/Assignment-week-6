$(document).ready(function() {
    console.log( "ready" );

    var cityArray = ['NYC', 'SF', 'LA', 'ATX', 'SYD' ];

    var option = '';

    for (var i=0; i <cityArray.length; i++) {
    	$('<option/>').val(cityArray[i]).html(cityArray[i]).appendTo('#city-type')

    	}

});
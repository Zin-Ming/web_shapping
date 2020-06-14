// JavaScript Document

var map;

function initMap(){
	
	var position = {lat:25.033976 , lng:121.564753};
		
	var map = new google.maps.Map(document.getElementById('map'),{
			
		center:position,
			
		zoom:16,
});
	
var marker = new google.maps.Marker({
		
		position:position,
		
		map:map
		
	}); 
	
}


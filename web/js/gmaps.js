"use strict";
function initialize() {
  	var mapCanvas = document.getElementById('map');

    var mapOptions = {
      center: new google.maps.LatLng(40.755595, -73.987628),
      disableDefaultUI: true,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    }
    //Create map
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Create marker
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.755585, -73.987628),
      map: map,
      title: 'Mozzarella',
      icon: 'images/map-marker.png'
 	});

 	//Create ribbon
    var ribbon = new google.maps.Marker({
      position: new google.maps.LatLng(40.755585, -73.981585),
      map: map,
      icon: 'images/map-ribbon.png'
 	});

    //Map marker info
    var contentString = '<div id="map-info">'+
      '<h2>Mozzarella</h2>'+
      '<p style="text-align:left; margin:0;"><strong>Mozzarella</strong>, has the <strong>best food</strong> delivery service in town, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit maiores, incidunt quidem natus. Ut dolorum deleniti reiciendis tenetur illum, beatae cum, harum laborum, nisi omnis nulla laboriosam, ipsam nemo consectetur..</p>'+
      '</div>';

    //Add info to marker 
	var infowindow = new google.maps.InfoWindow({
	  content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

    //Keep map centered
    google.maps.event.addDomListener(window, 'resize', function() {
    	var center = map.getCenter();
    	google.maps.event.trigger(map, "resize");
    	map.setCenter(center); 
	});
  }
  google.maps.event.addDomListener(window, 'load', initialize);
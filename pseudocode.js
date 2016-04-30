/*
 anytime you see "<%= param_name %>", it is supposed to be a string formatting operation!
 javascript does not natively support it, but templating engines exist.

 for this example, I'm using underscore because i loooooooove it (underscorejs.org)
 I'm also using jQuery to handle the ajax request

 but you may always brute-force it, ie: 
 var template = "?lat=" + lat + "&long=" + lon
*/

var osm_lookup = "http://nominatim.openstreetmap.org/search?format=json&limit=1&q=<%= address %>";
var sunlight_lookup = "http://openstates.org/api/v1/legislators/geo/?lat=<%= latitude %>&long=<%= longitude %>&apikey=<%= apikey %>";

function buildResultForUser() {
	// THIS IS YOUR PRIMARY FUNCTION!
	// How do you combine the data from our two APIs together to show a result for the user?
}

function doAjaxSyncronousRequest(url_template, params) {
	return $.ajax({
		async : false,
		dataType : "json",
		url : _.template(url_template, params)
	});
}

function getLatLonFromAddress(address) {
	// use OpenStreetMaps API
	// OSM requires spaces to be replaced by '+'

	var params = {
		address : address.replace(\ \g, '+')
	};

	return doAjaxSyncronousRequest(osm_lookup, params);

}

function getLegislatorFromLatLong(latitude, longitude) {
	// use Sunlight FDN API
	var apikey = "ABCDEFG!";

	var params = {
		latitude : latitude, 
		longitude : longitude,
		apikey : apikey
	};

	return doAjaxSyncronousRequest(sunlight_lookup, params);
}
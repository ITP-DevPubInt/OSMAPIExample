// anytime you see "%s", it is supposed to be a string formatting operation!
// javascript does not natively support it, but templating engines exist (i.e. in Backbone?)
// you may always brute-force it, ie: 
// var template = "?lat=" + lat + "&long=" + lon

var osm_lookup = "http://nominatim.openstreetmap.org/search?format=json&limit=1&q=%s";
var sunlight_lookup = "http://openstates.org/api/v1/legislators/geo/?lat=%s&long=%s";

function getLatLonFromAddress(address) {
	// use OpenStreetMaps API
}

function getLegislatorFromLatLong(lat, long) {
	// use Sunlight FDN API
}
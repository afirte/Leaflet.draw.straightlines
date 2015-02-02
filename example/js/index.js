var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'examples.map-i875mjb7'
}).addTo(map);

var drawnItems = new L.FeatureGroup();

map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
	draw: {
        polygon: {
            allowIntersection: false
        },
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false
    },
    edit: {
        featureGroup: drawnItems,
    }
});

map.addControl(drawControl);
map.initStraightLines();

map.on('draw:created', function (e) {
    //e.layer.editing.enable();
    drawnItems.addLayer(e.layer);
});
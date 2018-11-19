$(document).ready(function(){
$("button#mainland").click(function() {
    $("#versionchoice2").slideToggle(300);
});
});

var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})

var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.323554, 114.183632], 12);

      // create custom icon
var firefoxIcon = L.icon({
iconUrl: 'location.png',
iconSize: [70, 60], // size of the icon
popupAnchor: [0,-15]
});



var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appsW17MiCVbB2ngY/Top%209%20Museums%20in%20Hong%20Kong?api_key=keyAJxw8CDlX3pUko";
var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["name"] = value.fields.Museum_Name;
               items["url"] = value.fields.Website;
               items["image_url"] = value.fields.Image_url;
               items["latitud"] = value.fields.Lat;
               items["longitud"] = value.fields.Lng;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function show_districts(){

for (var i in data) {
  var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
  L.marker( latlng , {icon: firefoxIcon})
  .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+ '" width = "300px"><br>'+data[i].name + '</a>' )
  .addTo(map);
}
}

$(document).ready(function(){
$("button#mainland").click(function() {
    $("#versionchoice2").slideToggle(300);
});
});

$(document).ready(function(){
$("button#check").click(function() {
  $("#versionchoice1").slideToggle(300);
});
});


var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,})

var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.344286, 114.135550], 10);

      // create custom icon
var yellow = L.icon({
iconUrl: 'img/pinyellow.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var red = L.icon({
iconUrl: 'img/pinred.png',
iconSize: [30, 40], // size of the icon
popupAnchor: [0,-15]
});

var blue = L.icon({
iconUrl: 'img/pinblue.png',
iconSize: [35, 40], // size of the icon
popupAnchor: [0,-15]
});

var gallery = L.icon({
iconUrl: 'img/gallery.png',
iconSize: [90, 130], // size of the icon
popupAnchor: [0,-15]
});

var general = L.icon({
iconUrl: 'img/general.png',
iconSize: [60, 50], // size of the icon
popupAnchor: [0,-15]
});

var speciality = L.icon({
iconUrl: 'img/speciality.png',
iconSize: [40, 30], // size of the icon
popupAnchor: [0,-15]
});

var recommendation = L.icon({
iconUrl: 'img/recommendation.png',
iconSize: [50, 40], // size of the icon
popupAnchor: [0,-15]
});



var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/Hong%20Kong%20Island?api_key=keyLZQGPBz655pCmy";
var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["name"] = value.fields.name;
               items["url"] = value.fields.website;
               items["image_url"] = value.fields.image_url;
               items["latitud"] = value.fields.Lat;
               items["longitud"] = value.fields.Lng;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function show_districts1(){

for (var i in data) {
  var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
  L.marker( latlng , {icon: yellow})
  .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+ '" width = "300px"><br>'+data[i].name + '</a>' )
  .addTo(map);
};
};


var map2_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/Kowloon?api_key=keyLZQGPBz655pCmy";
var map2_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map2_items = {};
               map2_items["name"] = value.fields.name;
               map2_items["url"] = value.fields.website;
               map2_items["image_url"] = value.fields.image_url;
               map2_items["latitud"] = value.fields.Lat;
               map2_items["longitud"] = value.fields.Lng;
               map2_data.push(map2_items);
               console.log(map2_items);
        }); // end .each
}); // end getJSON

function show_districts2(){

for (var i in map2_data) {
  var latlng = L.latLng({ lat: map2_data[i].latitud, lng: map2_data[i].longitud });
  L.marker( latlng , {icon: red})
  .bindPopup( '<a href="' + map2_data[i].url + '" target="_blank">' + '<img src="' + map2_data[i].image_url+ '" width = "300px"><br>'+map3_data[i].name + '</a>' )
  .addTo(map);
};
};



var map3_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/New%20Territories?api_key=keyLZQGPBz655pCmy";
var map3_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map3_items = {};
               map3_items["name"] = value.fields.name;
               map3_items["url"] = value.fields.website;
               map3_items["image_url"] = value.fields.image_url;
               map3_items["latitud"] = value.fields.Lat;
               map3_items["longitud"] = value.fields.Lng;
               map3_data.push(map3_items);
               console.log(map3_items);
        }); // end .each
}); // end getJSON

function show_districts3(){

for (var i in map3_data) {
  var latlng = L.latLng({ lat: map3_data[i].latitud, lng: map3_data[i].longitud });
  L.marker( latlng , {icon: blue})
  .bindPopup( '<a href="' + map3_data[i].url + '" target="_blank">' + '<img src="' + map3_data[i].image_url+ '" width = "300px"><br>'+map3_data[i].name + '</a>' )
  .addTo(map);
};
};

var map4_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/Galleries?api_key=keyLZQGPBz655pCmy";
var map4_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map4_items = {};
               map4_items["name"] = value.fields.name;
               map4_items["url"] = value.fields.website;
               map4_items["image_url"] = value.fields.image_url;
               map4_items["latitud"] = value.fields.Lat;
               map4_items["longitud"] = value.fields.Lng;
               map4_data.push(map4_items);
               console.log(map4_items);
        }); // end .each
}); // end getJSON

function show_districts4(){

for (var i in map4_data) {
  var latlng = L.latLng({ lat: map4_data[i].latitud, lng: map4_data[i].longitud });
  L.marker( latlng , {icon: gallery})
  .bindPopup( '<a href="' + map4_data[i].url + '" target="_blank">' + '<img src="' + map4_data[i].image_url+ '" width = "300px"><br>'+map4_data[i].name + '</a>' )
  .addTo(map);
};
};

var map5_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/General?api_key=keyLZQGPBz655pCmy";
var map5_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map5_items = {};
               map5_items["name"] = value.fields.name;
               map5_items["url"] = value.fields.website;
               map5_items["image_url"] = value.fields.image_url;
               map5_items["latitud"] = value.fields.Lat;
               map5_items["longitud"] = value.fields.Lng;
               map5_data.push(map5_items);
               console.log(map5_items);
        }); // end .each
}); // end getJSON

function show_districts5(){

for (var i in map5_data) {
  var latlng = L.latLng({ lat: map5_data[i].latitud, lng: map5_data[i].longitud });
  L.marker( latlng , {icon: general})
  .bindPopup( '<a href="' + map5_data[i].url + '" target="_blank">' + '<img src="' + map5_data[i].image_url+ '" width = "300px"><br>'+map5_data[i].name + '</a>' )
  .addTo(map);
};
};

var map6_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDdtSXGZCSxIRLx/Speciality?api_key=keyLZQGPBz655pCmy";
var map6_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map6_items = {};
               map6_items["name"] = value.fields.name;
               map6_items["url"] = value.fields.website;
               map6_items["image_url"] = value.fields.image_url;
               map6_items["latitud"] = value.fields.Lat;
               map6_items["longitud"] = value.fields.Lng;
               map6_data.push(map6_items);
               console.log(map6_items);
        }); // end .each
}); // end getJSON

function show_districts6(){

for (var i in map6_data) {
  var latlng = L.latLng({ lat: map6_data[i].latitud, lng: map6_data[i].longitud });
  L.marker( latlng , {icon: speciality})
  .bindPopup( '<a href="' + map6_data[i].url + '" target="_blank">' + '<img src="' + map6_data[i].image_url+ '" width = "300px"><br>'+map6_data[i].name + '</a>' )
  .addTo(map);
};
};

var map7_items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appf1f9Jo9tPha7wJ/The%20top%2013%20Museums?api_key=keyLZQGPBz655pCmy";
var map7_data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           map7_items = {};
               map7_items["name"] = value.fields.name;
               map7_items["url"] = value.fields.website;
               map7_items["image_url"] = value.fields.image_url;
               map7_items["latitud"] = value.fields.Lat;
               map7_items["longitud"] = value.fields.Lng;
               map7_data.push(map7_items);
               console.log(map7_items);
        }); // end .each
}); // end getJSON

function show_districts7(){

for (var i in map7_data) {
  var latlng = L.latLng({ lat: map7_data[i].latitud, lng: map7_data[i].longitud });
  L.marker( latlng , {icon: recommendation})
  .bindPopup( '<a href="' + map7_data[i].url + '" target="_blank">' + '<img src="' + map7_data[i].image_url+ '" width = "300px"><br>'+map7_data[i].name + '</a>' )
  .addTo(map);
};
};

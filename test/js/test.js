var lat = 34.985600;
var lng = 135.758335;

var map = null;
var marker = null;
var comment = null;
var state = null;
var mappingmap = null;

var latitude = null;
var longitude = null;
var latlng = null;

var conpensate = null;


$(function(){
  
  map = L.map('demoMap').setView( [ lat, lng ], 18 );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'

    }
  ).addTo( map );

  //マッピングページのマップ
  mappingmap = L.map('mapping_map').setView( [ lat, lng ], 18 );
  L.tileLayer(
    'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 18,
  minZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'

    }
  ).addTo( mappingmap );

  var center = mappingmap.getCenter();
  var center_icon = L.icon({
    iconUrl: "icon/icon_cursol.png"
  });

  c_marker = L.marker([(center.lat-0.0004), (center.lng+0.00065)],{
    icon: center_icon,
    clickable: false,
    interactive: false
  });
  c_marker.addTo(mappingmap);

  mappingmap.on('dragend zoomend dblclick drag', function (e) {
    conpensate = mappingmap.getCenter();
    c_marker.setLatLng( [(conpensate.lat-0.0004), (conpensate.lng+0.00065)] );
  });
});


//モーダルウィンドウを表示するためのボタン処理
function OnButtonClick(){

  $('#popupMapping, #layerMapping').show();

  $('#close_ok, #layerMapping').click(function(e) {
    $('#popupMapping, #layerMapping').hide();
    latitude = conpensate.lat-0.00056; 
    longitude = conpensate.lng+0.0007566;
    latlng = new L.LatLng( latitude , longitude);

    //ここにマッピング処理とかを書く

  });

  $('#close_no, #layer').click(function(e) {
    $('#popupMapping, #layerMapping').hide();
  });

}
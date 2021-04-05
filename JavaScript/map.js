function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(32.53365190521027, 35.875240396377414),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
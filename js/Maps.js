function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 20});

	var icon = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png",new google.maps.Size(32, 32), new google.maps.Point(0, 0),new google.maps.Point(16, 32));
	
	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
			inserirDenuncia(map);
			
		}, function () {
			handleLocationError(true, map, icon);
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, map, icon);
	}
}
//Joao gostoso

function handleLocationError(browserHasGeolocation, map, icon) {
	var pos = {
        lat: -23.629696,
        lng: -45.426566
    };
	map.setCenter(pos);
	map.setZoom(12);
	
	var infoWindow = new google.maps.InfoWindow({map: map});
	var marcador = new google.maps.Marker({position: pos, icon: icon, map: map});
	
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
	
	inserirDenuncia(map);
}

function inserirDenuncia(map){
	var buraco1 = new denuncia(map);
			buraco1.setId("1000");
			buraco1.setCategoria("Filtro 1");
			buraco1.setLatitude("-23.636883");
			buraco1.setLongitude("-45.425906");
			buraco1.teste();
			buraco1.exibirPonto();
}

function adicionarMarcador(location, map) {
	var marcador = new google.maps.Marker({position: location, map: map});
}

function denuncia(vMap){
    var id;
    var categoria;
    var latitude;
    var longitude;

    this.setId = function (vId) {
        id = vId;
    }

    this.setCategoria = function (vCategoria) {
        categoria = vCategoria;
    }

    this.setLatitude = function (vLatitude) {
        latitude = vLatitude;
    }

    this.setLongitude = function (vLongitude) {
        longitude = vLongitude;
    }
	
    this.getId = function () {
        return id;
    }

    this.getCategoria = function () {
        return categoria;
    }

    this.getLatitude = function () {
        return latitude;
    }

    this.getLongitude = function () {
        return longitude;
    }

    this.teste = function () {
        //alert("ID: " + getId() + "\nCategoria: " + getCategoria() + "\nLatitude: " + getLatitude() + "\nLongitude: " + getLongitude());
    }
}


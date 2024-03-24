 // get query string parameters lat, lon
        var urlParams = new URLSearchParams(location.search);
        var lat = urlParams.get('lat');
        var lon = urlParams.get('lon');

        mapboxgl.accessToken = MY_TOKEN;
        var map = new mapboxgl.Map({
            container: 'map', // container ID
            // longitude, latitude of Bristol
            center: [-2.587910, 51.454514],
            zoom: 14
        });

        // request user geolocation and callback with lon and lat
            function getLocation(page) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(loc) { // permission granted
                        location.href = `${page}?lat=${loc.coords.latitude}&lon=${loc.coords.longitude}`;
                    },
                    function() { // permission denied
                        // location defaults to central Bristol
                        location.href = `${page}?lat=51.454514&lon=-2.587910`;
                    }
                )
            }
            else { // unsupported feature
                alert("Geolocation is not supported by this browser.");
                //location defaults to central Bristol
                location.href='${page}?lat=51.454514&lon=-2.587910';
            }
        }

        function query() {
            let url = 'https://services2.arcgis.com/a4vR8lmmksFixzmB/arcgis/rest/services/Replicate_EV_Charge_point_data_April_2020/FeatureServer/0/query?where=1%3D1&outFields=Chargepoint,Location,Energy__kWh_,Model_Variant&outSR=4326&f=json'
            fetch(url,{ method: 'get' , headers: { Accept: "application/JSON" }})
            .then(res => res.json())
            .then(addMarkers);
        }

        function addMarkers(data) {
            let features = data.features;
            for(let i=0; i<features.length; i++) {
                let attributes = features[i].attributes;
                let geometry = features[i].geometry;

                // adding marker to map
                let marker = new mapboxgl.Marker().setLngLat([geometry.x, geometry.y]).addTo(map);

                // adding popup
                let popup = new mapboxgl.Popup({ offset: 25 }).setText(attributes.NAME);
                marker.setPopup(popup);
            }
        }

        // Call query initially to fetch data and add markers
        query();
        

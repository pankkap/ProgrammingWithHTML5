const findMyLocation = () => {
  const status = document.querySelector(".status");

  // Success Function
  const success = (position) => {
    console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log(lat + " " + lng);

    // We call Revese Geocoding API
    apiurl = `https://api.bigdatacloud.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=68ade027930f482f944d9e081203a6d3`;
    console.log(apiurl);

    // Fetch data from API
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        status.textContent = data.principalSubdivision;
      });

    // Display Map

    var coords = new google.maps.LatLng(lat, lng);

    var mapOptions = {
      zoom: 9,
      center: coords,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      // There are gour types of Map Types
      // 1. ROADMAP     2. SATELLITE    3. HYBRID       4. TERRAIN
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({ map: map, position: coords });
  };

  // Error  Function
  const error = () => {
    status.textContent = "Unable to retrieve the location";
  };

  navigator.geolocation.getCurrentPosition(success, error);
};

document.querySelector(".btn").addEventListener("click", findMyLocation);

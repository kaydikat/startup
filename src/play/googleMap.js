function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: { lat: 0, lng: 0 },
    });
  
    map.addListener("click", (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    });
  }
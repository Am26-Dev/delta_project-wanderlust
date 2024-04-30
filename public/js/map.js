mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: coordinates.geometry.coordinates,
    zoom: 10,
});


const marker1 = new mapboxgl.Marker({ color: 'red'})
    .sentLngLat( coordinates.geometry.coordinates) // Lisitng.geometry.coordinates vale bhejenge isme
    .setPopup(
        new mapboxgl.Popup({offset: 25, }).setHTML(
           `<h4> ${coordinates.title}</h4><p>Exact location provided after booking</p>`
        )
    )
    .addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'red'})
    .sentLngLat( coordinates.geometry.coordinates) // Lisitng.geometry.coordinates vale bhejenge isme
    .setPopup(
        new mapboxgl.Popup({offset: 25, }).setHTML(
           `<h4> ${coordinates.title}</h4><p>Exact location provided after booking</p>`
        )
    )
    .addTo(map);
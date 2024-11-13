import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibXJ0aW50YW1zIiwiYSI6ImNtM2Z4bTExMDAwbzEya3NpcGxleHZ0ZzcifQ.Gd4pQv6fPTfp7wZVvg3gIw';

const map = new mapboxgl.Map({
  container: 'map-container',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 10
});

const cities = [
  {
    name: 'Rio',
    coordinates: [-43.1729, -22.9068]
  },
  {
    name: 'Berlin',
    coordinates: [13.405, 52.52]
  },
  {
    name: 'Shanghai',
    coordinates: [121.4737, 31.2304]
  },
  {
    name: 'Barcelona',
    coordinates: [2.1734, 41.3851]
  },
  {
    name: 'Paris',
    coordinates: [2.3522, 48.8566]
  },
  {
    name: 'London',
    coordinates: [-0.1276, 51.5074]
  },
  {
    name: 'Melbourne',
    coordinates: [144.9631, -37.8136]
  },
  {
    name: 'Marseille',
    coordinates: [5.3698, 43.2965]
  },
  {
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037]
  },
  {
    name: 'Bali',
    coordinates: [115.1889, -8.4095]
  },
  {
    name: 'Tel Aviv',
    coordinates: [34.7818, 32.0853]
  },
  {
    name: 'Kyoto',
    coordinates: [135.7681, 35.0116]
  },
  {
    name: 'Madrid',
    coordinates: [-3.7038, 40.4168]
  },
  {
    name: 'Lisbon',
    coordinates: [-9.1393, 38.7223]
  },
  {
    name: 'Montreal',
    coordinates: [-73.5673, 45.5017]
  },
  {
    name: 'Nantes',
    coordinates: [-1.5536, 47.2184]
  },
  {
    name: 'Milan',
    coordinates: [9.19, 45.4642]
  },
  {
    name: 'Tokyo',
    coordinates: [139.6917, 35.6895]
  },
  {
    name: 'Amsterdam',
    coordinates: [4.9041, 52.3676]
  },
  {
    name: 'Lyon',
    coordinates: [4.8357, 45.764]
  },
];

const cityCards = document.querySelectorAll('.card');
cityCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const city = cities[index];
    map.flyTo({
      center: city.coordinates,
      zoom: 12,
      essential: true
    });
  });
});

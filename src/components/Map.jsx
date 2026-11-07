import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import { useState } from 'react';

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {cities} = useCities();
  const [mapPosition, setMapPosition ] = useState([40,0])
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={`${styles.mapContainer}`} onClick={() => navigate("form")}>
      <MapContainer center={[mapLat, mapLng]} zoom={13} scrollWheelZoom={true} className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
  />
  {cities.map(city => (
    <Marker position={[city.position.lat, city.position.lng]}>
    <Popup>
      {city.emoji} {city.cityName}
    </Popup>
  </Marker>
  )
  )}
</MapContainer>
    </div>
  )
}

export default Map

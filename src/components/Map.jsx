import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import { useEffect, useState } from 'react';

function Map() {
  const [searchParams] = useSearchParams();
  const {cities} = useCities();
  const [mapPosition, setMapPosition ] = useState([0, 40])
  const mapLat = searchParams?.get("lat");
  const mapLng = searchParams?.get("lng");
  useEffect(() => {
    if(mapLat && mapLng){
      setMapPosition([mapLat, mapLng])
    }
  },[mapLat, mapLng]);

  return (
    <div className={`${styles.mapContainer}`} >
      <MapContainer
      center={mapPosition}
      zoom={6}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <ChangeCentre position={mapPosition} />
      <DetectClick />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

        {cities.map(city => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.cityName}>
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

function ChangeCentre({position}){
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick(){
  const navigate = useNavigate();

  useMapEvent({
    click: () => navigate("form"),
  })
}

export default Map

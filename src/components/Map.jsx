import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import { useEffect, useState } from 'react';
import { useGeolocation } from '../hooks/useGeolocation';
import Button from './Button'
import { useUrlPosition } from '../hooks/useURLPosition';

function Map() {
  const {cities} = useCities();
  const [mapPosition, setMapPosition ] = useState([0, 40]);
  const {isLoading: isLoadingPosition, position: geoLocationPosition, getPosition} = useGeolocation();
  const [lat,lng] = useUrlPosition();
  useEffect(() => {
  if (lat && lng) {
    setMapPosition([Number(lat), Number(lng)]);
  }
}, [lat, lng]);
  useEffect(() => {
    if(geoLocationPosition){
      setMapPosition([geoLocationPosition.lat,geoLocationPosition.lng])
    } 
  }, [geoLocationPosition]);

  return (
    <div className={`${styles.mapContainer}`} >
      {!geoLocationPosition &&
      <Button type = "position" onclick = {getPosition} >
        `{isLoadingPosition ? "Loading...": "Use your position"}`  
      </Button>} 
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

import { useMapEvents } from "react-leaflet";

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(
        `form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`
      );
    },
  });

  return null;
}

export default Map

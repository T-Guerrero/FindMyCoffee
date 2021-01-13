import { Fragment, useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Establishment from './components/Establishment';
import EstablishmentsService from './services/establishments_service';

function App() {
  const { REACT_APP_GOOGLE_API_KEY } = process.env;

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState({});

  async function setCurrentLocation() {
    await navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }, (err) => {
      alert("Habilite a localização para usar esse APP");
    })
  }

  async function loadCoffeeShops() {
    const response = await EstablishmentsService.index(latitude, longitude);
    setLocations(response.data.results);
  }

  useEffect(() => {
    setCurrentLocation();
    loadCoffeeShops();
  }, []);

  return (
    <Fragment>
      <LoadScript googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap 
        mapContainerStyle={{height: "100vh", width: "100%"}}
        zoom={15}
        center={{lat: latitude, lng: longitude}}
        onClick={() => setSelected({})}>
          {
            locations.map((location, index) => {
              return (<Marker 
                key={index} 
                icon="/images/coffee-pin.svg"
                title={location.name} 
                animation="4"
                position={{lat: location.geometry.location.lat, lng: location.geometry.location.lng}}
                onClick={() => setSelected(location)} />)
            })
          }
          {
            selected.place_id && <Establishment place={selected}/>
          }
          <Marker icon="/images/my-location-pin.svg" title="Seu local" animation="2" position={{lat: latitude, lng: longitude}} />
        </GoogleMap>
      </LoadScript>
    </Fragment>
  );
}

export default App;

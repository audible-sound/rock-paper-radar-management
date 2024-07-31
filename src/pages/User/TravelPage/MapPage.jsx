import Map, {Marker} from 'react-map-gl/maplibre';
import UserLayout from '../../../components/Layouts/UserLayout';
import Header from '../../../components/ui/Header';
import Pin from '../../../components/Travel/Pin';

const MapPage = () => {
  

  return (
    <UserLayout>
      <Header>
        <span>Map View</span>
      </Header>
      <Map
        initialViewState={{
          longitude: -122.48,
          latitude: 37.78,
          zoom: 15.5,
          bearing: 0,
          pitch: 0,
        }}
        style={{width: "100%", height: "100%"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=OBjixdwcNKPy2XkgqySd"
      
      >
        <Marker
          latitude= {40}
          longitude= {-30}
          anchor='bottom'
        >
          <Pin/>
        </Marker>
      </Map>
    </UserLayout>
  );
}

export default MapPage

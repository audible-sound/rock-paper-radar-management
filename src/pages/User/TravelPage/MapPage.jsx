import Map from 'react-map-gl/maplibre';
import UserLayout from '../../../components/Layouts/UserLayout';
import Header from '../../../components/ui/Header';
import { useState } from 'react';

const MapPage = () => {
    const [click, setClick] = useState()
    const [markers, setMarkers] = useState([
      {lat:0, long:0}
    ])

    const handleClick = (e) => {
      setClick(e.lngLat)
      console.log(click);

    }
    
    return (
        <UserLayout>
            <Header>
            <span className='text-2xl'><b>Map View</b></span>
            </Header>
            <div className='h-full w-full flex flex-row justify-center items-center'>
            <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      onMouseDown={handleClick}
      style={{width: "100%", height: "100%"}}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=OBjixdwcNKPy2XkgqySd"
    />

            </div>
             
        </UserLayout>

       
      );
}

export default MapPage

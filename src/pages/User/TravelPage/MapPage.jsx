import UserLayout from '../../../components/Layouts/UserLayout';
import Header from '../../../components/ui/Header';
import { useEffect, useState } from 'react';
import GarbageIcon from '../../../components/Travel/GarbageIcon'
import GarbageMarker from '../../../components/Travel/GarbageMarker';
import CongestedMarker from '../../../components/Travel/CongestedMarker';
import CongestedIcon from '../../../components/Travel/CongestedIcon';
import MapLoader from '../../../components/Travel/MapLoader';
import PhotogenicMarker from '../../../components/Travel/PhotogenicMarker';
import PhotogenicIcon from '../../../components/Travel/PhotogenicIcon';

const MapPage = () => {
  const [cursor, setCursor] = useState({lng:0, lat:0})
  const [markers, setMarkers] = useState([])
  const [addGarbage, setGarbage] = useState(false)
  const [addTraffic, setTraffic] = useState(false)
  const [addCamera, setCamera] = useState(false)
  const [isDelete, setDelete] = useState(false)
  

  const handleClick = () => {
    if (addGarbage) {
      setMarkers([
        ...markers,
        {
          id: markers.length,
          component: (
            <GarbageMarker
            size={20}
            key={markers.length}
            lat={cursor.lat}
            lng={cursor.lng}
            onClick={() => {
              handleMarkerClick(markers.length)
              console.log("hi")
            }
            }
          />
          ),
          lat: cursor.lat,
          lng: cursor.lng
        }
        
        ])
    }else if(addTraffic) {
      setMarkers([
        ...markers, 
        {
          id: markers.length,
          component: (
            <CongestedMarker
            size={20}
            key={markers.length}
            lat={cursor.lat}
            lng={cursor.lng}
            onClick={() => {
              handleMarkerClick(markers.length)
              console.log("hi")
            }
            }
          />
          ),
          lat: cursor.lat,
          lng: cursor.lng
        }
        ])
    } else if (addCamera) {
      setMarkers([
        ...markers, 
        {
          id: markers.length,
          component: (
            <PhotogenicMarker
            size={20}
            key={markers.length}
            lat={cursor.lat}
            lng={cursor.lng}
            onClick={() => {
              handleMarkerClick(markers.length)
              console.log("hi")
            }
            }
          />
          ),
          lat: cursor.lat,
          lng: cursor.lng
        }
        ])}}


  const handleMarkerClick = (id) => {
    console.log(id);
    console.log(isDelete);
    
    if (isDelete) {
      setMarkers(markers.filter((marker) => {
        console.log(marker.id);
        
        marker.id !== id}
    ))
      console.log("Hi");
      
    }
  };

  useEffect(() => {
    console.log('isDelete state changed:', isDelete);
  }, [isDelete]);

  return (
    <UserLayout>
      <Header className={"flex flex-row justify-between items-center"}>
        <span className='text-2xl'>Map View</span>
        <div className='gap-4 flex'>
          <button className={`${addGarbage ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"} text-white my-2  font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer focus:outline-none`}
          onClick={() => setGarbage((d) => !d)}
          ><GarbageIcon size={40}/></button>
          <button className={`${addTraffic ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"} text-white my-2  font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer focus:outline-none`}
          onClick={() => setTraffic((d) => !d)}
          ><CongestedIcon size={40}/></button>
          <button className={`${addCamera ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"} text-white my-2  font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer focus:outline-none`}
          onClick={() => setCamera((d) => !d)}
          ><PhotogenicIcon size={40}/></button>
          <button className={`${isDelete ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"}min-w-28 text-white my-2 bg-[#7091E6] font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer hover:bg-[#7091E6] active:bg-violet-700 focus:outline-none`}
          onClick={()=>{setDelete((d)=>!d)
            console.log(isDelete);
            
          }}
          >
            Remove Marker
          </button>
        </div>
        
      </Header>
      
      <MapLoader 
        handleClick={handleClick}
        setCursor={setCursor}
        cursor={cursor}
        markers={markers.map((marker) => marker.component)}
      />
    </UserLayout>
  );
}

export default MapPage

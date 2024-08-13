import UserLayout from '../../../components/Layouts/UserLayout';
import Header from '../../../components/ui/Header';
import { useState } from 'react';
import GarbageIcon from '../../../components/Travel/GarbageIcon'
import GarbageMarker from '../../../components/Travel/GarbageMarker';
import CongestedMarker from '../../../components/Travel/CongestedMarker';
import CongestedIcon from '../../../components/Travel/CongestedIcon';
import MapLoader from '../../../components/Travel/MapLoader';
import PhotogenicMarker from '../../../components/Travel/PhotogenicMarker';
import PhotogenicIcon from '../../../components/Travel/PhotogenicIcon';

const MapPage = () => {
  const [cursor, setCursor] = useState({lng: 0, lat: 0})
  const [markers, setMarkers] = useState([])
  const [activeMarkerType, setActiveMarkerType] = useState(null)
  const [isDelete, setDelete] = useState(false)
  
  const handleClick = () => {
    if (activeMarkerType) {
      const id = Date.now()
      const newMarker = {
        id,
        type: activeMarkerType,
        lat: cursor.lat,
        lng: cursor.lng
      }
      setMarkers(prevMarkers => [...prevMarkers, newMarker])
      setActiveMarkerType(null) // Reset after adding
    }
  }

  const handleMarkerClick = (id) => {
    if (isDelete) {
      setMarkers(currentMarkers => currentMarkers.filter(marker => marker.id !== id))
    }
  }

  const renderMarker = (marker) => {
    const commonProps = {
      key: marker.id,
      size: 20,
      lat: marker.lat,
      lng: marker.lng,
      onClick: () => handleMarkerClick(marker.id)
    }
    switch(marker.type) {
      case 'garbage': return <GarbageMarker {...commonProps} />
      case 'traffic': return <CongestedMarker {...commonProps} />
      case 'camera': return <PhotogenicMarker {...commonProps} />
      default: return null
    }
  }

  return (
    <UserLayout>
      <Header className="flex flex-row justify-between items-center">
        <span className='text-2xl'>Map View</span>
        <div className='gap-4 flex'>
          {['garbage', 'traffic', 'camera'].map(type => (
            <button
              key={type}
              className={`${activeMarkerType === type ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"} text-white my-2 font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer focus:outline-none`}
              onClick={() => setActiveMarkerType(activeMarkerType === type ? null : type)}
            >
              {type === 'garbage' && <GarbageIcon size={40}/>}
              {type === 'traffic' && <CongestedIcon size={40}/>}
              {type === 'camera' && <PhotogenicIcon size={40}/>}
            </button>
          ))}
          <button
            className={`${isDelete ? "bg-lime-400 hover:bg-lime-600" : "hover:bg-[#5079df] bg-[#7091E6]"} min-w-28 text-white my-2 font-semibold rounded-md p-2 text-center items-center justify-center cursor-pointer focus:outline-none`}
            onClick={() => setDelete(d => !d)}
          >
            Remove Marker
          </button>
        </div>
      </Header>
      
      <MapLoader 
        handleClick={handleClick}
        setCursor={setCursor}
        cursor={cursor}
        markers={markers.map(renderMarker)}
      />
    </UserLayout>
  );
}

export default MapPage
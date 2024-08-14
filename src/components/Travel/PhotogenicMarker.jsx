import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import PhotogenicIcon from "./PhotogenicIcon"

const PhotogenicMarker = ({size=20, length, lat, lng, onClick}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
      onClick={onClick}
    >
      <PhotogenicIcon size={`${size}px`}/>
    </Marker>
  )
}

export default PhotogenicMarker

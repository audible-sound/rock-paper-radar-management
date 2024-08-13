import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import PhotogenicIcon from "./PhotogenicIcon"

const PhotogenicMarker = ({size=20, length, lat, lng}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
    >
      <PhotogenicIcon size={`${size}px`}/>
    </Marker>
  )
}

export default PhotogenicMarker

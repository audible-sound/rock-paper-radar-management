import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import GarbageIcon from "./GarbageIcon"

const GarbageMarker = ({size=20, length, lat, lng, onClick}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
      onClick={()=>onClick()}
    >
      <GarbageIcon size={`${size}px`}/>
    </Marker>
  )
}

export default GarbageMarker

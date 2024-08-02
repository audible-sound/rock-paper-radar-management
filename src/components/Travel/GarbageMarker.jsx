import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import GarbageIcon from "./GarbageIcon"

const GarbageMarker = ({size=20, length, lat, lng}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
    >
      <GarbageIcon size={size}/>
    </Marker>
  )
}

export default GarbageMarker

import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import CongestedIcon from "./CongestedIcon"

const CongestedMarker = ({size=20, length, lat, lng, onClick}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
      onClick={onClick}
    >
      <CongestedIcon size={`${size}px`}/>
    </Marker>
  )
}

export default CongestedMarker

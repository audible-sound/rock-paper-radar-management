import { Marker } from "react-map-gl/dist/esm/exports-maplibre"
import CongestedIcon from "./CongestedIcon"

const CongestedMarker = ({size=20, length, lat, lng}) => {
  return (
    <Marker
      key={length}
      latitude= {lat}
      longitude= {lng}
      anchor='bottom'
    >
      <CongestedIcon size={size}/>
    </Marker>
  )
}

export default CongestedMarker

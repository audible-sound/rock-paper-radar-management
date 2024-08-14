import Map from 'react-map-gl/maplibre';

const MapLoader = ({handleClick, setCursor, markers}) => {
  return (
    <div className='h-full w-full '>
      <Map
        onMouseMove={(e) => {
            setCursor(e.lngLat) 
          }}
        onMouseDown={handleClick}
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 1
        }}
        mapStyle={"https://api.maptiler.com/maps/streets/style.json?key=q9EdfYY1JdifqGtVraeG"}
        style={{width: "100%", height: "100%", position: "absolute"}}
        cursor='pointer'
      >{markers.map((d)=>{
        return d
      })}
      </Map>
    </div>
    
  )
}

export default MapLoader

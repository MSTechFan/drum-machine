import {React, useRef, useState, useEffect} from 'react'
import styles from './Volume.css'



const Volume = () => {

  const [range, setRange] = useState(useRef()) 
  const barHoverBox = useRef()
  const fill = useRef()
  let barStillDown = false

  const handleBar = (handleFunction, event) => {
    if(event.type === "onTouchMove" || event.type === "onMouseMove"){
      if(barStillDown){
        handleFunction(event)
      }
    }
    barStillDown = true
    handleFunction(event)
  }

  const handleChanges = (event) => {
    let offsetX = event.offsetX

    if(event.type === "onTouchMove"){
      offsetX = event.touches[0].pageX - event.touches[0].target.offsetLeft
    }
    const width = event.target.offsetWidth - 30
    const newRange = Math.max(
      Math.min(
        (offsetX - 15) / width * 100.0,
        100.0
      )
    )

    setRange({value: newRange})
  }

  const handleWheel = (event) => {
    const newValue = +range.value + event.deltaY * 0.5
    const newRange = Math.max(
      Math.min(
        newValue,
        100.0
      ),
      0
    )

    setRange({value: newRange})
  }

  useEffect(() => {
    fill.style.width = range.value + "%"
  }, [range.value])

  return (
    <div className="volume" style={styles}>
        <input ref={range} type="range" min="0" max="100" value="50" className="volume-range"/>
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M17.969,10c0,1.707-0.5,3.366-1.446,4.802c-0.076,0.115-0.203,0.179-0.333,0.179c-0.075,0-0.151-0.022-0.219-0.065c-0.184-0.122-0.233-0.369-0.113-0.553c0.86-1.302,1.314-2.812,1.314-4.362s-0.454-3.058-1.314-4.363c-0.12-0.183-0.07-0.43,0.113-0.552c0.186-0.12,0.432-0.07,0.552,0.114C17.469,6.633,17.969,8.293,17.969,10 M15.938,10c0,1.165-0.305,2.319-0.88,3.339c-0.074,0.129-0.21,0.201-0.347,0.201c-0.068,0-0.134-0.016-0.197-0.052c-0.191-0.107-0.259-0.351-0.149-0.542c0.508-0.9,0.776-1.918,0.776-2.946c0-1.028-0.269-2.046-0.776-2.946c-0.109-0.191-0.042-0.434,0.149-0.542c0.193-0.109,0.436-0.042,0.544,0.149C15.634,7.681,15.938,8.834,15.938,10 M13.91,10c0,0.629-0.119,1.237-0.354,1.811c-0.063,0.153-0.211,0.247-0.368,0.247c-0.05,0-0.102-0.01-0.151-0.029c-0.203-0.084-0.301-0.317-0.217-0.521c0.194-0.476,0.294-0.984,0.294-1.508s-0.1-1.032-0.294-1.508c-0.084-0.203,0.014-0.437,0.217-0.52c0.203-0.084,0.437,0.014,0.52,0.217C13.791,8.763,13.91,9.373,13.91,10 M11.594,3.227v13.546c0,0.161-0.098,0.307-0.245,0.368c-0.05,0.021-0.102,0.03-0.153,0.03c-0.104,0-0.205-0.04-0.281-0.117l-3.669-3.668H2.43c-0.219,0-0.398-0.18-0.398-0.398V7.012c0-0.219,0.179-0.398,0.398-0.398h4.815l3.669-3.668c0.114-0.115,0.285-0.149,0.435-0.087C11.496,2.92,11.594,3.065,11.594,3.227 M7.012,7.41H2.828v5.18h4.184V7.41z M10.797,4.189L7.809,7.177v5.646l2.988,2.988V4.189z"></path>
        </svg>
        <div ref={barHoverBox} className="bar-hoverbox" 
        onTouchStart={(event) => handleChanges(event)} onTouchMove={(event) => handleBar(handleChanges, event)} onMouseDown={(event) => handleBar(handleChanges, event)} onMouseMove={(event) => handleBar(handleChanges, event)} 
        onWheel={(event) => handleWheel(event)}
        onMouseUp={() => barStillDown = false}
        onTouchEnd={() => barStillDown = false}
        >
          <div className="bar">
            <div ref={fill} className="bar-fill"></div>
          </div>
        </div>
    </div>
  )
}

export default Volume
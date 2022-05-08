import {React, useState} from 'react'
import Display from './Display'
import DrumPad from './DrumPad'



const DrumMachineBox = () => {
  const [drumTile, setDrumTile] = useState('esto es una prueba')
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 600, height: 350, outline: '5px solid green', padding: 10, alignItems: 'center', justifyContent: 'center'}} id='drum-machine'>
      <DrumPad drumTile={drumTile} audioElement={audioElement}/>
      <Display drumTile={{drumTile}}/>
    </div>
  )
}

export default DrumMachineBox
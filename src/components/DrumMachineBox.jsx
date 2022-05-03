import {React, useState} from 'react'
import Display from './Display'
import DrumPad from './DrumPad'
import useAudio from '../hooks/useAudio'


const DrumMachineBox = () => {
  const [drumTile, setDrumTile] = useState('esto es una prueba')
  const play = useAudio
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 600, height: 350, outline: '5px solid green', padding: 10, alignItems: 'center', justifyContent: 'center'}} id='drum-machine'>
      <DrumPad drumTile={{drumTile}} play={{play}}/>
      <Display drumTile={{drumTile}} play={{play}}/>
    </div>
  )
}

export default DrumMachineBox
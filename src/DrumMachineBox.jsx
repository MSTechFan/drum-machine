import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'

const DrumMachineBox = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 600, height: 350, outline: '5px solid green', padding: 10, alignItems: 'center', justifyContent: 'center'}} id='drum-machine'>
      <DrumPad/>
      <Display/>
    </div>
  )
}

export default DrumMachineBox
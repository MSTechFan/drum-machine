import React from 'react'
import Display from './Display'
import DrumPad from './DrumPad'

const DrumMachineBox = () => {
  return (
    <div id='drum-machine'>
      <DrumPad/>
      <Display/>
    </div>
  )
}

export default DrumMachineBox
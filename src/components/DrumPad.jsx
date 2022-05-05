import React from 'react'

const DrumPad = ( props ) => {
  console.log(props)
  return (
    <div style={{
        flex: 1
    }}>
        <button onClick={() => props.audioElement.play()} className='drum-pad' id='letterQ'>Q</button>
        <button className='drum-pad' id='letterE'>E</button>
        <button className='drum-pad' id='letterW'>W</button>
        <button className='drum-pad' id='letterA'>A</button>
        <button className='drum-pad' id='letterS'>S</button>
        <button className='drum-pad' id='letterD'>D</button>
        <button className='drum-pad' id='letterZ'>Z</button>
        <button className='drum-pad' id='letterX'>X</button>
        <button className='drum-pad' id='letterC'>C</button>
    </div>
  )
}

export default DrumPad
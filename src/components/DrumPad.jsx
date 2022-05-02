import React from 'react'

const DrumPad = ( drumTile, play ) => {
  console.log(play)
  return (
    <div style={{
        flex: 1
    }}>
        <button onClick={() => play()} className='drum-pad' id='letterW'>W</button>
        <button onClick={() => play()} className='drum-pad' id='letterE'>E</button>
        <button onClick={() => play()} className='drum-pad' id='letterQ'>Q</button>
        <button onClick={() => play()} className='drum-pad' id='letterA'>A</button>
        <button onClick={() => play()} className='drum-pad' id='letterS'>S</button>
        <button onClick={() => play()} className='drum-pad' id='letterD'>D</button>
        <button onClick={() => play()} className='drum-pad' id='letterZ'>Z</button>
        <button onClick={() => play()} className='drum-pad' id='letterX'>X</button>
        <button onClick={() => play()} className='drum-pad' id='letterC'>C</button>
    </div>
  )
}

export default DrumPad
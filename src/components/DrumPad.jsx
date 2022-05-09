import React from 'react'
import {Btn} from './Btn'
import useAudio from '../hooks/useAudio'

let audioBtn = ''
const handleAudio = (src) => {
  audioBtn = useAudio(src)
  audioBtn.play()
}

const DrumPad = ( props ) => {
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
    }}>
        <Btn onClick={() => handleAudio('guitarChord')}>Q</Btn>
        <Btn>E</Btn>
        <Btn>W</Btn>
        <Btn>A</Btn>
        <Btn>S</Btn>
        <Btn>D</Btn>
        <Btn>Z</Btn>
        <Btn>X</Btn>
        <Btn>C</Btn>
    </div>
  )
}

export default DrumPad
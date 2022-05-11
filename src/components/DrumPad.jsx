import React from 'react'
import {Btn} from './Btn'


import guitarChord from '../assets/audio/guitar-chords.wav'
import guitarCool from '../assets/audio/guitar-cool.wav'
import guitarElectrial from '../assets/audio/guitar-electrical.wav'
import guitarNotification from '../assets/audio/guitar-notification.wav'
import guitarQuick from '../assets/audio/guitar-quick.wav'
import guitarRiff from '../assets/audio/guitar-riff.wav'
import guitarStroke from '../assets/audio/guitar-stroke.wav'
import guitarStrum from '../assets/audio/guitar-strum.wav'
import guitarToy from '../assets/audio/guitar-toy.wav'



const DrumPad = ( props ) => {
  
  const handleAudio = (idElem) => {   
    let id = document.getElementById(idElem)
    props.setAudioBtn(idElem)
    id.play()
  }

  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
    }}>
        <Btn onClick={() => handleAudio("letterQ")}> <audio id='letterQ' src={guitarChord}/>Q</Btn>
        <Btn onClick={() => handleAudio("letterW")}> <audio id='letterW' src={guitarCool}/>W</Btn>
        <Btn onClick={() => handleAudio("letterE")}> <audio id='letterE' src={guitarElectrial}/>E</Btn>
        <Btn onClick={() => handleAudio("letterA")}> <audio id='letterA' src={guitarNotification}/>A</Btn>
        <Btn onClick={() => handleAudio("letterS")}> <audio id='letterS' src={guitarQuick}/>S</Btn>
        <Btn onClick={() => handleAudio("letterD")}> <audio id='letterD' src={guitarRiff}/>D</Btn>
        <Btn onClick={() => handleAudio("letterZ")}> <audio id='letterZ' src={guitarStroke}/>Z</Btn>
        <Btn onClick={() => handleAudio("letterX")}> <audio id='letterX' src={guitarStrum}/>X</Btn>
        <Btn onClick={() => handleAudio("letterC")}> <audio id='letterC' src={guitarToy}/>C</Btn>
    </div>
  )
}

export default DrumPad
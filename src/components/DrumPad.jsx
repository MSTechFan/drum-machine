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

import pianoAlarm from '../assets/audio/piano-alarm-tone.wav'
import pianoBirdTro from '../assets/audio/piano-bird-tropical.wav'
import pianoDog from '../assets/audio/piano-dog.wav'
import pianoGameOver from '../assets/audio/piano-game-over.wav'
import pianoLittleBird from '../assets/audio/piano-little-bird.wav'
import pianoRetro from '../assets/audio/piano-retro-not.wav'
import pianoRoar from '../assets/audio/piano-roar.wav'
import pianoSweep from '../assets/audio/piano-sweep.wav'
import pianoWildLion from '../assets/audio/piano-wild-lion.wav'


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
        <Btn onClick={() => handleAudio("letterQ")}> <audio id='letterQ' src={props.switchBank ? guitarChord : pianoAlarm}/>Q</Btn>
        <Btn onClick={() => handleAudio("letterW")}> <audio id='letterW' src={props.switchBank ? guitarCool : pianoBirdTro}/>W</Btn>
        <Btn onClick={() => handleAudio("letterE")}> <audio id='letterE' src={props.switchBank ? guitarElectrial : pianoDog}/>E</Btn>
        <Btn onClick={() => handleAudio("letterA")}> <audio id='letterA' src={props.switchBank ? guitarNotification : pianoGameOver}/>A</Btn>
        <Btn onClick={() => handleAudio("letterS")}> <audio id='letterS' src={props.switchBank ? guitarQuick : pianoLittleBird}/>S</Btn>
        <Btn onClick={() => handleAudio("letterD")}> <audio id='letterD' src={props.switchBank ? guitarRiff : pianoRetro}/>D</Btn>
        <Btn onClick={() => handleAudio("letterZ")}> <audio id='letterZ' src={props.switchBank ? guitarStroke : pianoRoar}/>Z</Btn>
        <Btn onClick={() => handleAudio("letterX")}> <audio id='letterX' src={props.switchBank ? guitarStrum : pianoSweep}/>X</Btn>
        <Btn onClick={() => handleAudio("letterC")}> <audio id='letterC' src={props.switchBank ? guitarToy : pianoWildLion}/>C</Btn>
    </div>
  )
}

export default DrumPad
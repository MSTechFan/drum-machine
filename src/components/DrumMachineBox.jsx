import {React, useState} from 'react'
import Display from './Display'
import DrumPad from './DrumPad'



const DrumMachineBox = () => {
  const [audioBtn, setAudioBtn] = useState()
  const [power, setPower] = useState(true)

  const muteMe = (elem, value=true) => {
    elem.muted = value
    if(value === true){
      elem.pause()
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 600, height: 350, outline: '5px solid green', padding: 10, alignItems: 'center', justifyContent: 'center'}} id='drum-machine'>
      <DrumPad setAudioBtn={setAudioBtn}/>
      <Display audioBtn={audioBtn} power={power} setPower={setPower} setAudioBtn={setAudioBtn}/>
      {
        power === false ? document.querySelectorAll("audio").forEach(elem => muteMe(elem)) : document.querySelectorAll("audio").forEach(elem => muteMe(elem, false))
      }
    </div>
  )
}

export default DrumMachineBox
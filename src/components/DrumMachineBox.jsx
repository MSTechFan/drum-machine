import {React, useState, useEffect} from 'react'
import Display from './Display'
import DrumPad from './DrumPad'



const DrumMachineBox = () => {
  const [audioBtn, setAudioBtn] = useState()
  const [power, setPower] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const [muted, setMuted] = useState(false)

  const muteMe = (elem, value=true) => {
    elem.muted = value
    if(value === true){
      elem.pause()
    }
  }

  useEffect(() => {
    document.querySelectorAll("audio").forEach(elem => elem.volume = volume)
  }, [volume])

  return (
    <div style={{display: 'flex', flexDirection: 'row', width: 600, height: 350, outline: '5px solid green', padding: 10, alignItems: 'center', justifyContent: 'center'}} id='drum-machine'>
      <DrumPad setAudioBtn={setAudioBtn}/>
      <Display audioBtn={audioBtn} power={power} setPower={setPower} setAudioBtn={setAudioBtn} volume={volume} setVolume={setVolume} setMuted={setMuted} muted={muted}/>
      {
        power === false ? document.querySelectorAll("audio").forEach(elem => muteMe(elem)) : document.querySelectorAll("audio").forEach(elem => muteMe(elem, false))
      }
      {
        document.querySelectorAll("audio").forEach(elem => elem.volume = volume)
      }
      {
        muted === true ? document.querySelectorAll("audio").forEach(elem => elem.muted=true) : document.querySelectorAll("audio").forEach(elem => elem.muted=false)
      }

    </div>
  )
}

export default DrumMachineBox
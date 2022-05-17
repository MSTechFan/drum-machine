import {React} from 'react'
import { DisplayBtn, DescriptionBox } from './Btn'
import Volume from './Volume'
import Bank from './Bank.jsx'



const Display = ( props ) => {

  const handlePower = () => {
    props.power ? props.setPower(false) : (
      props.setAudioBtn(""),
      props.setPower(true)
      )
  }
  
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    }} id='display'>
        <DisplayBtn onClick={() => handlePower()} boxColor={props.power ? "green": "red"}>{props.power ? "ON": "OFF"}</DisplayBtn>
        <DescriptionBox>{props.power ? props.audioBtn : "" }</DescriptionBox>        
        <Volume volume={props.volume} setVolume={props.setVolume} setMuted={props.setMuted} muted={props.muted}/>
        <Bank/>
    </div>
  )
}

export default Display
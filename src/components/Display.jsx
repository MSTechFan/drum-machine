import {React, useState} from 'react'
import { DisplayBtn, DescriptionBox } from './Btn'
import Volume from './Volume'
import {Bank, BankInside} from './Bank'



const Display = ( props ) => {

  const [switchBank,setSwitchBank] = useState(true)

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
        <p>BANK</p>
        <Bank onClick={() => setSwitchBank(!switchBank)} switch={switchBank ? "flex-start": "flex-end"}>
          <BankInside></BankInside>
        </Bank>
    </div>
  )
}

export default Display
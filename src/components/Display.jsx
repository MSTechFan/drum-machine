import React from 'react'
import { DisplayBtn, DescriptionBox } from './Btn'

const Display = () => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    }} id='display'>
        <DisplayBtn>POWER UP</DisplayBtn>
        <DescriptionBox>Description</DescriptionBox>
        <DisplayBtn>BANK</DisplayBtn>
    </div>
  )
}

export default Display
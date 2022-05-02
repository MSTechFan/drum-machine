import React from 'react'

const Display = () => {
  return (
    <div style={{
        flex: 1
    }} id='display'>
        <button>Power up</button>
        <div style={{backgroundColor: 'gray', width: 150}}><p>Description</p></div>
        <button>Bank</button>
    </div>
  )
}

export default Display
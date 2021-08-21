import React from 'react'
import aub from '../images/aub.png'

const aubBackdrop = (props) => {
  return (
      <div style={{ display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center', backgroundImage: `url(${aub})`,
        backgroundColor: 'rgba(255, 192, 203, .8',
        backgroundBlendMode: 'screen', backgroundSize: '100%', borderRadius: '10px',
        marginTop: '50px', height: props.height}} ></div>
  )
}

export default aubBackdrop

import React from 'react'
import { Link } from 'react-router-dom'

const AboutBtn = () => {

    const AbtSmallScreen = window.innerWidth <=576;
    const AboutStyle ={
        position: 'fixed',
        backgroundColor: 'black',
        color : 'white',
        fontWeight: '600',
        bottom : AbtSmallScreen ? '20px' : '70px',
        left :  AbtSmallScreen ? '30px' : '50px',
    }

  return (
    <>
        <Link to='/portfolio/About'>
            <button className='btn AbtBtn' style={AboutStyle}>A B O U T - M E</button>
        </Link>
    </>
  )
}

export default AboutBtn
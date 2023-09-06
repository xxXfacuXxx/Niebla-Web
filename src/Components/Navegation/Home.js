import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom'

function Home() {

//Estilos 
    const divStyle = {
        backgroundColor: '#3e4840',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      };
    
      const title = {
        background: 'none',
        fontSize: '22em',
        fontFamily: 'Stadium',
        color: '#eeece9'
      }
    
      const divButton = {
        margin:'0%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }
    
      const buttonStyle = {
        margin: '-20% 0% 0% 0%',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '3em',
        fontFamily: 'Anton',
        color: '#eeece9',
        letterSpacing: '2px',
        textDecoration: 'none',
        padding: '1%',
        transition: 'color 0.3s ease'
      };
    
      const handleButtonHover = (event) => {
        event.target.style.color = '#afafaf';
      };
    
      const handleButtonLeave = (event) => {
        event.target.style.color = '#eeece9';
      };

//Return
return (
<>
    <div style={divStyle}>
    <h1 style={title}>NIEBLA</h1>

        <div style={divButton}>
            <Link style={buttonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave} to='/Estudio'>estudio</Link>

            <p style={buttonStyle}>|</p>
            <Link style={buttonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave} to='/Films'>films</Link>

            <p style={buttonStyle}>|</p>
            <Link style={buttonStyle}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave} to='/Festival'>festival</Link>
        </div>
    </div>
</>
  )
}

export default Home; 
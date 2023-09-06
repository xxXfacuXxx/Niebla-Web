import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer(){
const divMain = {
    width: '100%',
    heith: '500px',
    padding: '5%',
    display: 'flex',
    flexDirecion: 'column',
    flexWrap: 'nowrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
}
const divContact = {
    width: '30%',
    heith: '100%',
    padding:'1% 2%',
}
const title = {
    fontFamily: 'Sarabun',
    fontSize: '1.1em',
    color: '#ebeae5',
    padding: '2%'
}
const info = {
    fontFamily: 'OpenSans',
    fontSize: '0.9em',
    marginBottom: '0',
    letterSpacing: '1px',
    color: '#ebeae5',
    padding: '0% 2%'
}
const icon = {
    fontSize: '24px',
    padding: '3%',
    color: '#ebeae5'
}
const dev = {
    padding: '5px',
    heith: '20px',
    textDecoration: 'none',
    fontFamily: 'OpenSans',
    fontSize: '1em',
    color: '#ebeae5',
    textAling:'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}
const devBtn = {
    padding: '5px',
    heith: '20px',
    textDecoration: 'none',
    fontFamily: 'OpenSans',
    fontSize: '1em',
    color: '#ebeae5',
    textAling:'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}
const handleButtonHover = (event) => {
    event.target.style.color = '#f9ff00';
};

const handleButtonLeave = (event) => {
event.target.style.color = '#eeece9';
};

return(
    <>
        <div style={divMain}>
            <div style={divContact}>
            <h1 style={title}>Contactanos</h1>  

                <p style={info}>
                Estudio@niebla.com.ar <br/> 
                11 2222 3333 <br/> 
                9 de Julio, 1923 <br/> 
                Buenos Aires, Argentina.</p>

            </div>
            <div style={divContact}>
            <h1 style={title}>Seguinos</h1>  

                <p style={info}>
                    <FontAwesomeIcon icon={faFacebook} style={icon} />
                    <FontAwesomeIcon icon={faInstagram} style={icon} />
                    <FontAwesomeIcon icon={faYoutube} style={icon} />
                </p>

            </div>
            <div style={divContact}>
                <h1 style={title}>Festival</h1>
                <button type="button" class="btn btn-outline-danger">Inscribete</button>
            </div>
        </div>
        <div style={dev}>Desarrollado por <a href="https://facundo-cutuli.netlify.app/" target='_blank' style={dev}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave} >Facundo Cutuli</a></div>
    </>
    )
}  

export default Footer;
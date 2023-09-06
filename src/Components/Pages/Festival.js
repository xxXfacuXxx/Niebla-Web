import React from 'react'
import Navbar from '../Navegation/NavbarT';
import Footer from '../Navegation/FooterT';
import imageSrc from '../../Img/FDC.png'

function Festival(){
  const main = {
    backgroundColor: '#1e1818'
  }
  const info = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignContent: 'center',
    alignItems: 'center'
  }
  const title = {
    fontFamily: 'Galaxus',
    fontSize: '3em',
    color:'#eeeee6',
    letterSpacing: '2px'
  }
  const btn = {
    width: '500px',
    heigth: '40px'
  }
  const img = {
    width: '40%',
    padding: '2%'
  }
  return(
    <div style={main}>
    <Navbar/>
    <div style={info}>
      <img src={imageSrc} alt="" style={img}/>
    </div>
    <div style={info}>
      <button type="button" class="btn btn-outline-light" style={btn}>BASES Y CONDICIONES</button><br/>
      <button type="button" class="btn btn-outline-light" style={btn}>INSCRIPCIÓN</button>
    </div>
    <Footer/>
    </div>
  )
}
export default Festival;
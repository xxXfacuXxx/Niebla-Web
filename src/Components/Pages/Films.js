import React from 'react'
import Navbar from '../Navegation/Navbar'
import Footer from '../Navegation/Footer'
import imageSrc from '../../Img/NHEF.jpg'
import imageSrc2 from '../../Img/NHS.jpg'
import imageSrc3 from '../../Img/EC.jpg'
import imageSrc4 from '../../Img/AR.jpg'

function Films(){
  const divMain = {
    backgroundColor: '#efeeea',
    margin: '0',
    padding: '0% 0% 10% 0%',
  }
  const title = {
    fontFamily: 'Stadium',
    fontSize: '6em',
    padding: '0% 1%',
    color: '#3d473f',
    letterSpacing: '5px'    
  }
  const imageContainer = {
    textAlign: 'center'
  }
  const imageMask = {
    width: '100%', 
    height: '300px',
    padding: '1% 2%',
    overflow: 'hidden',
    margin: '0'
  }
  const croppedImage = {
    width: '100%',
    height: '170%', 
    objectFit: 'cover', 
    objectPosition: 'center center', 
    maxWidth: '100%',
  };
  const imgTitle = {
    position: 'absolute',
    fontFamily: 'Anton',
    fontSize: '1.4em',
    color: '#eeeee6',
    float: 'left',
    marginLeft: '1%',
  }

  return(
  <>
    <div style={divMain}>
      <Navbar />
      <h1 style={title}>FILMS</h1>
      <div style={imageContainer}>
        <div style={imageMask}>
          <p style={imgTitle}>NO HAY COMIDA EN UN FUNERAL</p>
          <a href='../Clip1'><img src={imageSrc} alt="Descripción de la imagen" style={croppedImage} /></a>
        </div>
      </div>
      <div style={imageContainer}>
        <div style={imageMask}>
          <p style={imgTitle}>NO HAY SEÑAL</p>
          <a href='../Clip2'><img src={imageSrc2} alt="Descripción de la imagen" style={croppedImage} /></a>
        </div>
      </div>
      <div style={imageContainer}>
        <div style={imageMask}>
          <p style={imgTitle}>EL CAMINO</p>
          <a href='../Clip3'><img src={imageSrc3} alt="Descripción de la imagen" style={croppedImage} /></a>
        </div>
      </div>
      <div style={imageContainer}>
        <div style={imageMask}>
          <p style={imgTitle}>ALFOMBRA ROJA</p>
          <a href='../Clip4'><img src={imageSrc4} alt="Descripción de la imagen" style={croppedImage} /></a>
        </div>
      </div>
    </div>
    <Footer/>
  </> 
  )
}

export default Films;
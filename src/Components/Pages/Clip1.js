import React from 'react';
import Navbar from '../Navegation/Navbar';
import Footer from '../Navegation/Footer';
import imageSrc from '../../Img/Post/img1.jpg';
import imageSrc2 from '../../Img/Post/img2.jpg';
import imageSrc3 from '../../Img/Post/nhcPoster.jpg'

function Clip() {
    const main = {
        width: '100%',
        display: 'flex',
        backgroundColor: '#efeeea',
        justifyContent: 'space-between'
    }
    const title = {
        fontFamily: 'Stadium',
        fontSize: '7em',
        color: '#31453a',
        letterSpacing: '5px',
        padding: '2%'
    }
    const subtitle = {
        fontFamily: 'Sarabun',
        fontSize: '2em',
        color: '#31453a'
    }
    const sup = {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'flex-start',
        width: '50%',
        flexDirection:'column'
    }
    const inf = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignContent: 'center',
        justifyContent: 'center'
    }
    const right = {
        width: '60%',
        margin: '0% 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontFamily: 'SarabunRegular',
        fontSize: '1.1em',
        color: '#31453a'
    }
    const poster = {
        width:'30%',
        padding: '5%'
    }
    const img = {
        flex: '0 0 auto',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
    }
    const container = {
        width: '50%',
        display: 'flex',
        flexFlow: 'column',
        gap: '5%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        alignContent: 'flex-end'
    }    
    const image = {
        flex: '0 0 auto',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
    }

  return (
    <>
      <Navbar />
        <div style={main}>
            <div style={sup}>
            <h1 style={title}>NO HAY COMIDA EN UN FUNERAL</h1>
            <div style={inf}>
                <div style={poster}>
                    <img src={imageSrc3} alt="" style={img} />
                </div>
                    <div style={right}>                    
                        <h2 style={subtitle}>SINOPSIS</h2>
                        <p>Tres amigos discuten y hablan sobre qué es la muerte para ellos de camino a un funeral</p>
                        <h2 style={subtitle}>FICHA TÉCNICA</h2>
                        <p>Director <br/> Pablo Biott<br/></p>
                        <p>Productor <br/>Sebastián Maruzzi</p>
                        <p>Asistente de Producción <br/> Agus Carfi</p>
                        <p>Actores <br/> MAURO: Lautaro Bettoni, <br/> JERÓNIMO: Túpac Inti Larriera <br/> LAUTARO: Tomás Arcella</p>
                        <p>Montajista <br/> Miranda Lucena y Pablo Biott</p>
                        <p>Sonido Directo <br/> Ayelén Mascaro</p>
                        <p>Diseño sonoro <br/> Jerónimo Sibuet</p>
                    </div>
            </div>
            </div>
                
            <div style={container}>
                <img src={imageSrc} alt="" style={image} />
                <img src={imageSrc2} alt="" style={image} />
            </div>

        </div>
      <Footer />
    </>
  );
}

export default Clip;

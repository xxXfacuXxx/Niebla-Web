import React from 'react';
import Navbar from '../Navegation/Navbar';
import Footer from '../Navegation/Footer';

function Estudio() {
  const divMain = {
    backgroundColor: '#efeeea',
    margin: '0',
    padding: '0',
    minHeight: '100vh'
  }
  const divSecondary = {
    maxWidth: '45%'
  }
  const title = {
    fontFamily: 'Stadium',
    fontSize: '6em',
    padding: '0% 1%',
    color: '#3d473f',
    letterSpacing: '5px'
  }
  const subtitle = {
    fontFamily: 'Sarabun',
    fontSize: '2em',
    padding: '0% 1%',
    color: '#3d473f',
    letterSpacing: '3px'
  }
  const information = {
    fontFamily: 'SarabunRegular',
    fontSize: '1.3em',
    padding:'0 1%',
    color:'#3d473f',
    letterSpacing: '1px'
  }
  return (
    <>
      <div style={divMain}>
        <Navbar />
        <div style={divSecondary}>
          <h1 style={title}>ESTUDIO</h1>
          <h2 style={subtitle}>Actualmente en reparación</h2>
          <p style={information}>Mandanos un mail a estudio@niebla.ar con tu consulta y estamos comunicandonos con vos lo antes posible.</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Estudio;

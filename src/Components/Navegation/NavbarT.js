import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navbarStyle = {
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyle = {
    fontFamily: 'Stadium',
    fontSize: '4em',
    color: '#ebeae5',
    margin: '0%',
    padding: '1%',
    textDecoration: 'none'
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '2%',
    display: 'flex',
    alignItems: 'center',
  };

  const navigatorStyle = {
    fontFamily: 'Anton',
    fontSize: '1.1em',
    color: '#ebeae5',
    margin: '0 5px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={navbarStyle}>
      <Link to='../../' style={titleStyle}>NIEBLA</Link> 
      <ul style={ulStyle}>
        <Link to='../../' style={navigatorStyle}>HOME</Link>
            <p style={navigatorStyle}>|</p>
        <Link to='../Estudio' style={navigatorStyle}>ESTUDIO</Link>
            <p style={navigatorStyle}>|</p>
        <Link to='../Films' style={navigatorStyle}>FILMS</Link>
            <p style={navigatorStyle}>|</p>
        <Link to='../Festival' style={navigatorStyle}>FESTIVAL</Link>
            <p style={navigatorStyle}>|</p>
        <Link to='../AboutUs'style={navigatorStyle}>ABOUT US</Link>
            <p style={navigatorStyle}>|</p>
        <Link to='../Contact' style={navigatorStyle}>CONTACT</Link>
      </ul>
    </div>
  );
};

export default Navbar;

import React from 'react'
import './index.css'
import imgURL from '../../assets/img/twitter@2x.png';


function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <div className="icon">
        <img src={imgURL} />
        <img />
        <img />
        <img />
        <img />
      </div>
      <p className="contact">contact@ffcap.com</p>
      <p className="copy">c© 2021 FFCAP</p>
    </div>
  );
}

export default myBottom;
import React from 'react'
import './index.css'
import imgURL from '../../assets/img/twitter@2x.png';
import imgURL2 from '../../assets/img/discord@2x.png';
import imgURL3 from '../../assets/img/medium.png';
import imgURL4 from '../../assets/img/telegram@2x.png';
import imgURL5 from '../../assets/img/email@2x.png';


function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <div className="icon">
        <img src={imgURL} />
        <img src={imgURL2}/>
        <img src={imgURL3}/>
        <img src={imgURL4}/>
        <img src={imgURL5}/>
      </div>
      <p className="contact">contact@ffcap.com</p>
      <p className="copy">c© 2021 FFCAP</p>
    </div>
  );
}

export default myBottom;
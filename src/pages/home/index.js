import React from 'react'
import './index.css'
import MyBottom from '../../components/myBottom'

function Home() {
  return (
    <div className="home">
      <div className="des">
        <p className="title">Building Dreams</p>
        <p>for</p>
        <p>Blockchain Entrepreneurs</p>
      </div>
      <a href="" className="about">ABOUT  FFCAP</a>
      <MyBottom/>
    </div>
  );
}

export default Home;
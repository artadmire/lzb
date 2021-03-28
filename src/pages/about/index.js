import React from 'react'
import './index.css'
import img2 from '../../assets/img/编组 8@2x.png'
import img3 from '../../assets/img/编组 7@2x.png'
import MyBottom from  '../../components/myBottom'
function About() {
  return (
    <div className="my-about">
      <h1>ABOUT FFCAP</h1>
      <div className="content">
        <div>
          <p className="title">
          About us Walk With Entrepreneurs
          </p>
          <p className="desc">
          FFCAP invests in blockchain innovation projects for and is committed to investing in long-term value in new growth areas.
  We are constantly learning and participating with entrepreneurs in the latest technologies and projects. 
        </p>
        <p className="titleW">
        Utilizing capital and solutions to help the best projects and teams grow FFCAP as a professional Token investment institution. 
        </p>
        <p className="desc">
        We were involved in investment projects since 2015 and have rich experience in how to invest and operate projects. 
  We have many partners, including operations, market, technology, exchange, economic model, business model design and other fields. 
  We can give block chain projects in different stages of development a professional and effective help on a greater degree to help the project to expand its own advantages and characteristics, guiding the project for development of long-term growth. 
        </p>
        <p className="title">A long-term value investor with an international perspective.</p>
          <p>
          FFCAP has many partners around the world. We devote all our resources to blockchain innovation and long-term value, and for working with the best blockchain teams around the world. 
      At the same time, FFCAP is looking for more excellent partners in the United States, China and Europe to discover more cutting-edge blockchain business thinking and methods.
          </p>
        </div>
        <div className="my-about-mddle">
          <h1>PARTNERSHIPS</h1>
          <aside className="top-aside">
            <div className="card-grids">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
            <img className="logs" src={img2}/>
          </aside>
          <aside className="top-aside">
            <div className="imgWrap">
              <div className="card"></div>
            </div>
            <div className="card-grids">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </aside>
        </div>
      </div>
      <MyBottom className="my-about-bottom"/>
    </div>
  );
}

export default About;
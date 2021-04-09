import React from 'react'
import './index.css'
function Contact() {
  return (
    <div className="Contact">
      <div className="card">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/%E4%BD%8D%E5%9B%BE%402x.png'/>
        <p >Contact By App</p>
        <div className="icons">
          <a target='_blank' href="https://twitter.com/FFCAP1" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/twitter%402x.png'/></a>
          <a target='_blank' href="https://discord.gg/Cas3g8bK" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/discord%402x.png'/></a>
          <a target='_blank' href="https://medium.com/@ffcap.pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/medium%402x.png'/></a>
          <a target='_blank' href="https://t.me/FFCAP_pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/telegram%402x.png'/></a>
        </div>
      </div>
      <a  href="javascript:;" className="card" rel="noreferrer">
        <img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/%E4%BD%8D%E5%9B%BE%402x%202.png'/>
        <p>Contact By Email</p>
        <span>business@ffcap.pro</span>
      </a>
    </div>
  );
}

export default Contact;
import React from 'react'
import './index.css'

function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <div className="icon">
        <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/twitter%402x.png' /></p>
        <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/discord%402x.png'/></p>
        <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/medium%402x.png'/></p>
        <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/telegram%402x.png'/></p>
        <p><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/email%402x.png'/></p>
      </div>
      <p className="contact">contact@ffcap.com</p>
      <p className="copy">© 2021 FFCAP</p>
    </div>
  );
}

export default myBottom;
import React from 'react'
import './index.css'

function myBottom(props) {
  const { className = ''} = props
  return (
    <div className={`myBottom ${className}`}>
      <div className="icon">
        <a target='_blank' href="https://twitter.com/FFCAP1" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/twitter%402x.png' /></a>
        <a target='_blank' href="https://discord.gg/Cas3g8bK" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/discord%402x.png'/></a>
        <a target='_blank' href="https://medium.com/@ffcap.pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/medium%402x.png'/></a>
        <a target='_blank' href="https://t.me/FFCAP_pro" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/telegram%402x.png'/></a>
        <a  href="javascript:;" rel="noreferrer"><img src='https://ffcap.oss-cn-hangzhou.aliyuncs.com/img/email%402x.png'/></a>
      </div>
      <p className="contact">business@ffcap.pro</p>
      <p className="copy">© 2021 FFCAP</p>
    </div>
  );
}

export default myBottom;
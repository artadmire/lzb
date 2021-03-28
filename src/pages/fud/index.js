import React, {useState} from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'
import matic from  '../../assets/img/matic.png'
import inch from  '../../assets/img/1inch.png'
import aave from  '../../assets/img/aave.png'
import dot from  '../../assets/img/dot.png'
import ksm from  '../../assets/img/ksm.png'
import mdx from  '../../assets/img/mdx.png'
import near from  '../../assets/img/near.png'
import plm from  '../../assets/img/plm.png'


function Fud() {
  const [list] = useState([
    {img:matic, title: "MATIC" },
    {img:inch, title: "1INCH" },
    {img:aave, title: "AAVE" },
    {img:dot, title: "DOT" },
    {img:ksm, title: "KSM" },
    {img:mdx, title: "MDX" },
    {img:near, title: "NEAR" },
    {img:plm, title: "PLM" }])
  return (
    <div className="Fud">
      <div>
        <h1 className="title" >FFCAP FUD</h1>
        <div className="content">
        {
          list.map((item, index) => <div key={index} className="card">
          <img src={item.img}/>
          <p>{item.title}</p>
        </div>)
        }
        
        </div>
      </div>
      <MyBottom className="Fud-bottom"/>
    </div>
  );
}

export default Fud;
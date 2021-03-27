import React, {useState} from 'react'
import './index.css'
import MyBottom from  '../../components/myBottom'
import a from  '../../assets/img/matic.png'


function Fud() {
  const [list] = useState([1,2,3,2,3,23])
  return (
    <div className="Fud">
      <div>
        <h1 className="title" >FFCAP FUD</h1>
        <div className="content">
        {
          list.map((i, index) => <div key={index} className="card">
          <img src={a}/>
          <p>Company profile Company profile Company profile</p>
        </div>)
        }
        
        </div>
      </div>
      <MyBottom className="Fud-bottom"/>
    </div>
  );
}

export default Fud;
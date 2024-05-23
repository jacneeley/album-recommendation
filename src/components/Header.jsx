import React from "react";
import {useState} from "react";

export default function Header(){

  const [popup, setPopup] = useState(false);

  function handlePopup(){
    if(!popup){
      setPopup(true);
    }
    else {
      setPopup(false);
    }
  }

    return (
    <>
      <div className="header">
        <div className="nav">
          <h1 className="title">Random Album Recommendation</h1>
          <button className="abt-btn" onClick={() => handlePopup()}>About</button>
          <hr/>
        </div>
      </div>
      <div id="popup" className={popup === false ? "pop-up" : "pop-up display-popup"}>
        <a className="close-btn" onClick={() => handlePopup()}>X</a>
        <div className="popup-content">
          <h2>About</h2>
          <p>KTSW Recommends is a web app that will recommend you a random album based on NACC Radio Charts.</p>
          <p>All data is provided by <a href="https://naccchart.com/" target="_blank">NACC Radio Charts</a>.</p>
          <p>This is just for fun. No cookies are used and no data is collected on this site.</p>
        </div>
      </div>
    </>
    );
}
import React from "react";

export default function DisplayPopup(){
    return (
    <div id="popup" className="pop-up">
      <a id ="close">X</a>
      <div className="popup-content">
        <h2>About</h2>
        <p>KTSW Recommends is a web app that will recommend you a random album based on what we play on air.</p>
        <p>All data is provided by <a href="https://naccchart.com/" target="_blank" style={{}}>NACC Radio Charts</a>.</p>
        <p>For more info on what we're currently playing check out our <a href="https://ktswblog.net/recently-played/" target="_blank">Recently Played</a> page.</p>
      </div>
    </div>
    );
}
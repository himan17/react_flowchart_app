import React, { useState } from 'react';
import OnePath from './OnePath';
import TwoPath from './TwoPath';
function Popup(){
    const[popup, setPopup] = useState(1);
    const[show1, setShow1] = useState(0);
    const[show2, setShow2] = useState(0);
    
    function load(event){
        var btn = event.target.innerHTML;
        if(btn === "One")setShow1(1);
        else setShow2(1);
        setPopup(0);
    }
    return <div>
        {popup ? 
        <div>
           <p> How many Elements ? </p>
           <button className= 'button-33'onClick = {load}>One</button>
           <button className= 'button-33'onClick = {load}>Two</button>
        </div> : null}
        {show1 ? <OnePath />: null}
        {show2 ? <TwoPath />: null}
    </div>
}

export default Popup; 
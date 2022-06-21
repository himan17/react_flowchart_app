import React from 'react';

function Box(props){
    var colorType = "";
    if(props.path==="Two"){ 
        colorType = "orange";
    }else if(props.path === "One"){
        colorType = "green";
    }
    const color = {
        background: colorType
    }
    return <div className='box' contentEditable = 'true' style={color}>{props.text}</div> 

}

export default Box;
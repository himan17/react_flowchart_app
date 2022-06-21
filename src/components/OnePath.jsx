import React, { useState } from 'react';
import Box from './Box';
import Vline from './Vline';
import Popup from './Popup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';


function OnePath(){
    const [pairity, setPairity] = useState(0);
    const [toggleAdd, setToggleAdd] = useState(0);
    function loadComponent(){
        setPairity(pairity ? 0 : 1);
        setToggleAdd(toggleAdd ? 0 : 1);
    }
    return <div>
        <Vline />
        <Box text = "Do this" path = "One"/>
        <Vline />
        <div onClick = {loadComponent}>{toggleAdd ? <div className = 'delete-btn'><DeleteIcon /></div>:<div className='add-btn'><AddCircleIcon /></div>}</div>
        {pairity? <Popup />: null}
        </div>
}

export default OnePath;
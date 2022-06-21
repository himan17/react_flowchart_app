import React, { useState } from 'react';
import Vline from './Vline'
import Box from './Box';
import Popup from './Popup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from './Navbar.jsx';


function App(){
    const [pairity, setPairity] = useState(0);
    const [toggleAdd, setToggleAdd] = useState(0);
    function loadComponent(){
        setPairity(pairity ? 0 : 1);
        setToggleAdd(toggleAdd ? 0 : 1);
    }
    return <div>
        <Navbar />
        <Box text = "Start"/>
        <Vline />
        <div onClick = {loadComponent}>{toggleAdd ? <button className = 'delete-btn'><DeleteIcon /></button>:<button className='add-btn'><AddCircleIcon /></button>}</div>
        {pairity? <Popup/>: null}
    </div>
}

export default App;
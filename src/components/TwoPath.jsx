import React, {useState} from 'react';
import Box from './Box';
import Hline from './Hline';
import Vline from './Vline';
import Popup from './Popup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function TwoPath(){
    const [pairity1, setPairity1] = useState(0);
    const [pairity2, setPairity2] = useState(0);
    const [toggleAdd1, setToggleAdd1] = useState(0);
    const [toggleAdd2, setToggleAdd2] = useState(0);

    function loadComponent1(){
        setPairity1(pairity1? 0 :1);
        setToggleAdd1(toggleAdd1 ? 0 : 1);
    }
    function loadComponent2(){
        setPairity2(pairity2? 0 : 1);
        setToggleAdd2(toggleAdd2 ? 0 : 1);
    }
    return <div className='parent'>
        <Vline />
        <Box text = "Condition" path = "Two"/>
        <Vline />
        <Hline />
        <div className='child'>
            <div className = 'child1'>
                <Vline />
                <div className='true-btn'><CheckCircleIcon/></div>
                <Vline/>
                <div onClick = {loadComponent1}>{toggleAdd1 ? <button className = 'delete-btn'><DeleteIcon /></button>:<button className='add-btn'><AddCircleIcon /></button>}</div>
                {pairity1 ? <Popup/> : null}
            </div>
            <div className = 'child2'>
                <Vline />
                <div className='false-btn'><CancelIcon/></div>
                <Vline/>
                <div onClick = {loadComponent2}>{toggleAdd2 ? <button className = 'delete-btn'><DeleteIcon /></button>:<button className='add-btn'><AddCircleIcon /></button>}</div>
                {pairity2 ? <Popup/> : null}
            </div>
        </div>
        
    </div>
}

export default TwoPath;
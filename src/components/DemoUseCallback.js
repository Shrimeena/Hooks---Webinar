import React, {useCallback, useState} from 'react';
import SampleList from './SampleList';

function DemoUseCallback() {
    const [dark, setDark] = useState('white');
    const [value, setvalue] = useState(1);

    const theme = {
        backgroundColor: dark ? 'white' : 'black',
        color: dark ? 'black' : 'white'
    };

    const getItems = () => {
        return [value, value+1, value+2];
    }

    return (
        <div style={theme}>
            <input type="number" value={value} onChange={(e)=>setvalue(parseInt(e.target.value))}/>
            <button onClick={()=>setDark(prev => !prev)}>Change Theme</button>
            <SampleList getItems={getItems}/>
        </div>
    )
}

export default DemoUseCallback;
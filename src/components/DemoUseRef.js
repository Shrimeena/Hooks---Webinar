import {useState, useRef} from "react";

const useRefDemo = () => {
    const [value, setvalue] = useState(0);
    const numberA = useRef(0);
    const textB = useRef(null);

    const getNumber = () => {
        numberA.current = value+1
        alert('You clicked ' + numberA.current);
        console.log("SHRI number value", value, 'ref', numberA)
    }

    const getText = () => {
        textB.current = value+' REACT'
        alert('You clicked ' + textB.current);
        console.log("SHRI text 11", value, 'ref', textB)
    }
    return (
        <div>
            <h1>Use Ref</h1>

            <input type="number" value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
            <button onClick={getNumber}>Rupee</button>
            <button onClick={()=>getText()} >Dollar</button>
        </div>
    )
}

export default useRefDemo;
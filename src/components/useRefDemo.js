import {useState, useRef} from "react";

const useRefDemo = () => {
    const [value, setvalue] = useState(0);

    const getNumber = () => {
        console.log("SHRI 00", value)
    }

    const getText = () => {
        console.log("SHRI 11", value)
    }
    return (
        <div>
            <input type="number" value={value} onChange={(e)=>setvalue(e.target.value)}/>
            <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
            <button onClick={getNumber}>Rupee</button>
            <button onClick={()=>getText()} >Dollar</button>
        </div>
    )
}

export default useRefDemo;
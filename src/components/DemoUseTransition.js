import { useState, useTransition } from "react";

function useTransitionDemo() {
    const LIST_ITEM = 20000;
    const [items, setItems] = useState([]);
    const [value, setvalue] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleChange = (e) => {
        setvalue(e.target.value);
        startTransition(()=>{
            const l = [];
            for (let i = 0; i < LIST_ITEM; i++) {
                l.push(i);
            }
            setItems(l);
        });
        
    }

    
    return (
        <div>
            <h1>Transition Demo</h1>
            <input type="text" value={value} onChange={handleChange}></input>
            {isPending ? 'Loadding..' : items.map((item, index) => (
                <div key={index}>{value}</div>))
            }
        </div>
    )
}

export default useTransitionDemo;
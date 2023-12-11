import { useEffect, useState } from "react";

function SampleList({getItems}) {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        setItems(getItems());
        console.log('Updating Items', items)
    }, []);

    return (
        <div>
            {items.map(item => <div key={item}>{item}</div>)}
        </div>
    )
}

export default SampleList;
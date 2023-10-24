import { useMemo, useState } from "react";
import { initialItems } from "../utils";

function useMemoCounter (){
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    // below line cause performance issue as item is a bigg array.
    const selectedItems = items.find((item) => item.isSelected);

    // const memoSelectedItems = useMemo(
    //     () => items.find((item) => item.isSelected), // function
    //     [items] // dependency array
    // )
     
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <h2>Selected Items: {selectedItems?.id}</h2>
        </div>
    )
}

export default useMemoCounter;
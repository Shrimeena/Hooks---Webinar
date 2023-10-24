import { useState, useTransition } from "react";
import Loader from '../components/loaderSVG';

function Transition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);
    
    function handleClick() {
      console.log("APPLE ",1);
      startTransition(() => {
        console.log("APPLE ",2);
        setCount(c => c + 1);
      });
      console.log("APPLE ",3);
    }
  
    return (
      <div>
        {isPending && 
           <Loader />
        }
        <button onClick={handleClick}>Transition Ex: {count}</button>
      </div>
    );
  }

export default Transition;  
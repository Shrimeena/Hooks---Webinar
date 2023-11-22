import React, {useEffect, useState} from "react";

function DemoUseEffect({count: countProp}) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setCount(countProp);
    return () => {
      // cleanup
      console.log('SIVA111', countProp);
    }
    
    // https://react.dev/learn/lifecycle-of-reactive-effects#the-lifecycle-of-an-effect
  }, [countProp]);
  
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default DemoUseEffect;
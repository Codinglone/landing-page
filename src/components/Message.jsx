import { useState } from "react";

const Message = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1 className="counter">{count}</h1>
        <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Message
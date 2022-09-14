import { useState } from "react";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Look Ma! I'm doing React now</h1>

      <h2> { count } </h2>
      <button 
        className="mr-2 border-2 border-black p-2"
        onClick={ () => setCount(count + 1) }>
        Add One
      </button>
      
      <button 
        className="mr-2 border-2 border-black p-2"
        onClick={ () => setCount(count - 1) }>
        Subtract One
      </button>
    </div>
  );
}

export default App;

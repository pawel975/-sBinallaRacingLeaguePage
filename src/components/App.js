import React, {useState} from 'react';
const App = () => {

   const [timer, setTimer] = useState(0);

   const handleClick = () => {
      setTimer(timer+1)
   }

   return (
      <>
         <h1>Hello, World! {timer}</h1>
         <button onClick={handleClick}>Add</button>
      </>
   )
};

export default App;
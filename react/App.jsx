import React, { useState } from 'react';
import Users from './Users';


const App = () => {
  const [name, setName] = useState("Geon")
  
  return (<>
  <h1>Hello {name} </h1>
  <br />
  <Users></Users>
  </>)
}

export default App
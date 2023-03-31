
import React,{useState} from "react";


const App = () => {
  const[count,setCount] = useState(0);
  const getData =()=>{
          setCount(count+1);
  }
  return (
    <div>
      <p>Button clicked {count} times</p>
        <button type="submit"onClick={getData} >Click me</button>
    </div>
  )
}

export default App;

import {useState, useEffect} from "react";


function App() {
  console.log("outside useEffect");

  const [count, setCount] = useState(window.innerWidth);
  function setFun(){
    setCount(window.innerWidth);
  }
  useEffect(()=>{
  window.addEventListener("resize",setFun); 
  return ()=>{
  console.log("cleanup operation")
  window.removeEventListener("resize", setFun);
  }
  },[]);
  <h1>I've rendered {count} times!</h1>;
  return (
    <>
      
      
      <h1>{count}</h1> 
    </>   
  );
}

export default App;

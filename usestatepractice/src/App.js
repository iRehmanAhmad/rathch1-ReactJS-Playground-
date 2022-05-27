
import react, {useState} from "react";
function App() {

  let[color, setColor]=useState("red");
  let[name, setName] = useState("Rehman");

  return (
    <>
    <h1>color: {color}</h1>
    <h1>Name: {name}</h1>
    <button type="button" onClick={()=>setColor("blue")}>Blue</button>
    <button type="button" onClick={()=>setName("Rehman Ahmad")}>Ahmad</button>
    </>
  );
}

export default App;

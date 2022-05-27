import useState from "react";


function App() {

  let[data, setData] = useState({
    rollno : "",
    name : ""
  });
  return (
    <>
    Welcome: {data.name}
    <form onSubmit={(e)=> {e.preventDefault() 
    //   console.log({name})
    }}>
    RollNo.:<input type="text" value={data.rollno}  onChange={(e)=> setData({...data, rollno:e.target.value}) } /><br/>
    Name:<input type="text" value={data.name}  onChange={(e)=> setData({...data, name:e.target.value}) } /><br/>
    
    <button type="submit">Submit</button>

    </form>
    </>    
  );
}

export default App;

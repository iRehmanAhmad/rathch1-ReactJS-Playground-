import {useState, useContext, createContext} from "react";
const UserContext = createContext();
function Component1(){
let[user, setUser] = useState("Rehman Ahmad");
  return(
  <>
    <UserContext.Provider value={user}>
      <h1>Hello {user}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  </>
);
}
function Component2(){
  const user = useContext(UserContext);
  return(
  <>
  <h1>Hello G {user}</h1>
  <Component3/>
  </>
  );
}
function Component3(){
  const user = useContext(UserContext);
  return(
  <>
  <h1>Hello G {user}</h1>
  </>
  );
}

export default Component1;

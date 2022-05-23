import React from "react";
import ReactDom from "react-dom";
import morning from "./images/morning.jpg"
import noon from "./images/noon.jpg"
import evening from "./images/evening.jpg"
import night from "./images/night.jpg"

const Greet = ()=>{
    
    return(
        <>
        <h1>Hello sir! Good <GetGreetings/> </h1>
        <GetImage/>
        </>
    )
    
}
const GetGreetings = ()=>{
    let greeting;
    const date = new Date(2020, 5,5, 19);
    const hours = date.getHours();
    if(hours>=4 && hours<12) greeting="Morning"
    else if(hours>=12 && hours<17) greeting="Noon"
    else if(hours>=17 && hours<19) greeting="Evening"
    else if(hours>=19 && hours<24) greeting="Night"
    return(
        <>
        {greeting}
         
        </>
    )
    }
    const GetImage = ()=>{
        let url;
        const date = new Date(2020, 5,5, 19);
        const hours = date.getHours();
        if(hours>=4 && hours<12) url= morning
        else if(hours>=12 && hours<17) url=noon
        else if(hours>=17 && hours<19) url=evening
        else if(hours>=19 && hours<24) url=night
        return( 
            <>
            <img src={url} alt="img"/>
            </>)
        }

ReactDom.render(<Greet/>,document.getElementById("root"))
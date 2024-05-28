import { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import Welcomepage from "./Welcomepage";
// my comments
function Main(){
    const[pagetab,setPageTab]=useState("")
    const[userdetails,setUserDetails]=useState({

    });
    switch(pagetab){
        case "signin":
            return <Signin setPageTab={setPageTab} setUserDetails={setUserDetails}/>
        case "signup":
            return <Signup setPageTab={setPageTab} setUserDetails={setUserDetails}/>
        case "todo" :
            return <Todolist setPageTab={setPageTab} setUserDetails={setUserDetails}/>
        default:
            return <Welcomepage setPageTab={setPageTab}/>         

    }
   
}
export default Main;
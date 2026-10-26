import { Navigate } from "react-router-dom"

const Protectrouting=({children})=>{
    const getuser= JSON.parse(localStorage.getItem("loggedInUser"))
   
    return getuser ? children : <Navigate to="/login"></Navigate>

}
export default Protectrouting
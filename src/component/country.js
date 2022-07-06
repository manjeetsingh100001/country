import axios from "axios"
import { useState } from "react"

const init={
    country:""
}

export const Country=()=>{
const [ctry,setNation]=useState(init)
    const addcountry = () => {
          
        return axios({
          url: "http://localhost:8080/add-country",
          method: "POST",
          data: ctry
               
        })
       
    }
    const handleChange = e => {
         const {id, value} = e.target
        setNation({ ...ctry, [id]:value} )
      }
    return(
        <>
        <h1>Add Country</h1>
        <input id="country" placeholder="Add Country" onChange={handleChange} >
            
        </input>
        <div><button onClick={addcountry}>Add Country</button></div>
        </>
    )
}
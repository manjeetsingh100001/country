import {useEffect,useState} from "react";
import axios from "axios";
const initState = {
    city: "",
    population: "",
    country: "",
    
  }

 export const City=()=>{
    const [Form, setForm] = useState(initState)
    const [list,setList]=useState([])
    useEffect(
        ()=> fetchData()
            // console.log(data)
        ,[])
        const fetchData=()=>{
            // fetch(`http://localhost:8080/add-city?rating_gte=${rate}&rating_ne=${rate}&_sort=rating&_order=${cSort}&_page=${page}&_limit=5`)

            fetch(`http://localhost:8080/add-country`)
            .then((res)=>res.json())
            .then((data)=>setList(data))
            
        }
        const handleChange = (e) => {
            console.log(e.target.value)
            const {id, value} = e.target
            setForm( { ...Form, [id]: value} )
          }

        const addpost = () => {
          
            return axios({
              url: "http://localhost:8080/add-city",
              method: "POST",
              data: Form
                
              
            })
        }
    return(
        <>
        <h1>Add City</h1>
        <div>
            <form>
                <input id="city" placeholder="city" onChange={handleChange}></input>
                <input id="population" placeholder="population" onChange={handleChange}></input>
               
                <select id="country"  onChange={handleChange}>
                
                    {list.map((d)=>
                    <option key={d.id}>{d.country}</option>
                    )}
                
                 </select>
                 <button onClick={addpost}> Add City</button>
            </form>
        </div>
        
        </>

    )
}
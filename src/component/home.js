import axios from "axios";
import {useEffect,useState} from "react";
import { Link } from "react-router-dom";

 export  const Home=()=>{
    const [list,setList]=useState([])
    const [del,setDel]=useState("")
    useEffect(
        ()=> fetchData()
        
         
        ,[])
        const fetchData=()=>{
            // fetch(`http://localhost:8080/add-city?rating_gte=${rate}&rating_ne=${rate}&_sort=rating&_order=${cSort}&_page=${page}&_limit=5`)

            fetch(`http://localhost:8080/add-city`)
            .then((res)=>res.json())
            .then((data)=>setList(data))
            
        }
        const handleDelete=async(e)=>{
        
            setDel(e.target.id)
            await axios({
                url: `http://localhost:8080/add-city/${del}`,
                method: "DELETE",
                      
              })
             fetchData()  
        } 

    return(
        <>
        <div style={{marginTop:"100px"}} >
            <button><Link to="/add-country">Add Country</Link></button>
       <button><Link to="/add-city">Add City</Link></button>
        </div>
<div style={{margin:"auto" ,width:"400px",marginTop:"100px"}}>
        <table>
  <tr>
    <th>id</th>
    <th>Country</th>
    <th>City</th>
    <th>Population</th>
    <th>Edit</th>
    <th>delete</th>
  </tr>
  {list.map((d)=><tr key={d.id} >
    <td>{d.id}</td>
    <td>{d.country}</td>
    <td>{d.city}</td>
    <td>{d.population}</td>
    <td>{"Edit"}</td>
    <td id={d.id} ><button id={d.id} onClick={handleDelete}>DELETE</button></td>
    </tr>

              )}
  
  
</table>
</div>

        </>
    )
}
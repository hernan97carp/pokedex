import { useState } from "react"
import pokeball from "../../images/poke1.png"
import "./navSearch.css"
export default function NavSearch(){
    const [search, setSearch] = useState()

function handleChange(event){
    event.preventDefault();
setSearch(event.target.value)
console.log(event.target.value)
}

function handleSubmit(event){
    event.preventDefault()

}


return(

    <>
    
     <form className="navForm" onSubmit={handleSubmit}>
    

    <input
    className="navInput"
    placeholder="Search pokemon"
    onChange={(event)=>handleChange(event)}
    type="text"
    value={search}
    ></input>
    <button type="submit" className="navButton">

   <img src={pokeball} className="pokeball"></img>
  
    </button>



     </form>
      

    
    
    
    </>
)




}
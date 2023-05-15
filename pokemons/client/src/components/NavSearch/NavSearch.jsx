import { useState } from "react"
import pokeball from "../../images/poke1.png"
import {useDispatch} from "react-redux"
import { getPokemonName } from "../../redux/Action/action"
import "./navSearch.css"


export default function NavSearch(){


 const [name, setName] = useState("")
const dispatch = useDispatch()

//\ \s significa "un espacio", y \s+significa "uno o más espacios".
//cada cadena contigua de caracteres de espacio se reemplaza con 
//la cadena vacía debido a la extensión +.


function handleChange(event){
    event.preventDefault();
setName(event.target.value.replaceAll(/^\s+/g, "").replaceAll(/\s+/g, " "))
}

function handleSubmit(event){
    event.preventDefault()
if(name!== ""){
    dispatch(getPokemonName(name))
    setName("")
}
}


return(

    <>
    
     <form className="navForm" onSubmit={handleSubmit}>
    

    <input
    className="navInput"
    placeholder="Search pokemon..."
    onChange={(event)=>handleChange(event)}
    type="text"
    value={name}
    ></input>
    <button type="submit" className="navButton">

   <img src={pokeball} className="pokeball"></img>
  
    </button>



     </form>
      

    
    
    
    </>
)




}
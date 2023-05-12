import { Link } from 'react-router-dom';
import "./landingPage.css"
import welcomeImage from "../images/pikachu.jpeg"
export default function LandingPage (){




return (
    <div className="landingConteiner">
    <div className="landingText">  
     <h3>Hello Everyone</h3>
     </div> 
   <img src={welcomeImage}/>
   <div className="landingButton">
   <Link to="/form">
   <button className="ov-btn-grow-box">ready? So, let's get started.</button>
  </Link>

   </div>      
   </div>

)
    
}
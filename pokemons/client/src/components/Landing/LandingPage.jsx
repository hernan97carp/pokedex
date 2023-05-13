import { Link } from 'react-router-dom';
import "./landingPage.css"
export default function LandingPage (){




return (
  <>
    <div className="landingConteiner">
 
     <h3 className="landingText">Hello Everyone</h3>
    
   <Link to="/home">
   <button className="ov-btn-grow-box">ready? So, let's get started.</button>
  </Link>
   </div>
   
   </>

)
    
}
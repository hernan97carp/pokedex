import { Link } from "react-router-dom";
import image from "../../images/images.jpg";
import "./navBar.css";
export default function NavBar() {
  return (
    <>
      <div className="wrap">
        <Link to="/">
          <button className="buttonNav">Get Out</button>
        </Link>
        <div className="conteinerImage">
          <img src={image} className="imagenPokeball"></img>
        </div>
        <Link to="/pokemonCreate">
          <button className="buttonNav">Create Pokemon</button>
        </Link>
      </div>
    </>
  );
}

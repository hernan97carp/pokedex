import "./error404.css";
import image404 from "../../images/profesorgif.gif";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <>
      <div className="conteinerImg">
        <img src={image404} alt="notfound" className="images404" />
        <div className="text404">
          {" "}
          <h3>Error 404</h3>
        </div>
        <div className="pagnotfound">
          <h3>page not found</h3>
        </div>
        <div className="buttonConteiner">
          <Link to="/home">
            <button className="buttonDetail">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error404;

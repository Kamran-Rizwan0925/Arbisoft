import { NavLink } from "react-router-dom";

function Card(props) {
    return (
      <>
        <div className="card ml-2 mt-4" style={{width: '18rem', marginLeft: '10px'}}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
            </div>
        </div>
      </>
    );
}
  
  export default Card;
  
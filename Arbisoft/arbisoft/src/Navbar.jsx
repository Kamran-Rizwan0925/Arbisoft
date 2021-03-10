import './Navbar.css'
import {NavLink} from 'react-router-dom';
function Navbar(){
    return (
    <>
<div className="container-fluid nav_bg bg-light ">
<div className="row">
<div className="col-10 mx-auto">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" style={{color: 'rgb(97, 209, 172)'}}>Arbisoft</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{justifyContent: 'flex-end'}} id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Service</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
</div>
</>
    ); 
}

export default Navbar;

import {NavLink} from 'react-router-dom';
function Common(props) {
  return (
    <>
     <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>{props.text}<strong className="brand-name"> Arbisoft</strong></h1>
                        <h6 className='mt-3'>
                            We are the team of talented developers making websites.
                        </h6>
                        <div className="mt-3">
                            <NavLink to={props.visit} className="btn btn-outline-primary" style={{borderRadius: '25px'}}>
                               {props.btnText}
                            </NavLink>
                        </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                            <img src={props.web} alt="home img" className="img-fluid animated" style={{height:'450px'}}/>
                        </div>    
                    </div>
                    
                </div>
            </div>
        </div>
     </section>
    </>
  );
}

export default Common;

import Card from "./Card";
import { Sdata }  from './Sdata';
function Service() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row text-center mx-auto">
                        {/* <div className="col-lg-3 col-md-4 mx-auto"> */}
                        {
                            Sdata.map(card => {
                          return <Card img={card.imgsrc} title={card.title} ></Card> }
                          )
                        }  
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Service;
  
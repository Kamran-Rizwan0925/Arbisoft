
function Contact() {
    return (
      <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-10 col-form-label">Full Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="name" placeholder="Enter your full name"/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-10 col-form-label">Phone No</label>
                <div class="col-sm-10">
                  <input type="number" readonly class="form-control" id="phoneNo" placeholder="Enter your phone no"/>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-10 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control" id="staticEmail" value="email@example.com"/>
                </div>
              </div>
              
              <div class="mb-3 row">
                <label for="message" class="col-10 col-form-label">Message</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="textarea" rows="3"></textarea>
                </div>
              </div>
              <div class="mt-5 col-auto">
                  <button type="submit" class="btn btn-outline-primary mb-3">Submit form</button>
              </div>  
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Contact;
  
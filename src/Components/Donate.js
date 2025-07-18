import React from 'react';
import '../Styles/Donate.css'; 
import Footer from './Footer';

const Donate = () => {
  return (
    <div id='donate' style={{ marginTop: '120px' }}>

      {/* Emotional Appeal*/}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 fw-bold">Your Support Makes a Difference</h2>
          <p className="lead">
            Every contribution you make helps us reach one more child with hope, care, and opportunity. 
            Join us in transforming lives, one donation at a time.
          </p>
        </div>
      </section>

      {/*Form Over Background Image */}
      <section className="donate-form-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-5 shadow-lg rounded form-box bg-dark bg-opacity-75 text-white">
                <h3 className="text-center mb-4">Your Kindness Can Change a Life</h3>
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Last Name" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email or Contact" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <select className="form-select" required>
                      <option value="">Choose...</option>
                      <option value="mobile-money">Mobile Money (+256782446763)</option>
                      <option value="paypal">PayPal</option>
                      <option value="credit-card">Credit Card</option>
                    </select>
                  </div>

                  <div className="mb-4 text-center">
                    <label className="form-label d-block mb-2">Donation Frequency</label>
                    <div className="btn-group" role="group" aria-label="Frequency">
                      <input type="radio" className="btn-check" name="frequency" id="one-time" autoComplete="off" defaultChecked />
                      <label className="btn btn-outline-light" htmlFor="one-time">One-Time</label>

                      <input type="radio" className="btn-check" name="frequency" id="monthly" autoComplete="off" />
                      <label className="btn btn-outline-light" htmlFor="monthly">Monthly</label>

                      <input type="radio" className="btn-check" name="frequency" id="yearly" autoComplete="off" />
                      <label className="btn btn-outline-light" htmlFor="yearly">Yearly</label>
                    </div>
                  </div>

                  <p className="text-center fst-italic mb-4">
                    "You may not be able to change the world for everyone, 
                    but for one child, your gift changes everything."
                  </p>

                  <div className="text-center">
                    <button type="submit" className="btn px-4 py-2 text-white" style={{ backgroundColor: '#992525' }}>
                      DONATE NOW
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
    </div>
  );
};

export default Donate;

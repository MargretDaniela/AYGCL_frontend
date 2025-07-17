import React from 'react';
import '../Styles/Contact.css'
import Footer from './Footer'
const Contact = () => {
  return (
    <div style={{ backgroundColor: 'hsla(0, 72%, 34%, 0.50)', marginTop: '120px', color: 'black' }}>
      <div className="container py-5 px-4 rounded" style={{ backgroundColor: 'rgba(253, 229, 229, 0.3)' }}>
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6 " style={{paddingLeft:'60px', paddingTop:'100px'}}>
            <p>
              If you want to join us, donate to us or you <br />
              want to contact us for any reason please <br />
              do using this contact form on the right <br />
              or directly by the use of the email.
            </p>
            <h5 style={{ color: ' #992525',paddingLeft:'30px' ,
              paddingTop:'10px'
            }}>Call Us</h5>
            <p>+256767724297</p>

            <h5 style={{ color: ' #992525',paddingLeft:'30px' ,paddingTop:'10px'}}>Email Us</h5>
            <p>asiliyamamagenerationcare.com</p>

            <h5 style={{ color: ' #992525', paddingLeft:'30px',paddingTop:'10px' }}>Follow Us</h5>
            <p>
              <a href="/" className="text-dark text-decoration-none">Facebook</a> /{' '}
              <a href="/" className="text-dark text-decoration-none">Instagram</a> /{' '}
              <a href="/" className="text-dark text-decoration-none">Twitter</a>
            </p>

            <h5 style={{ color: ' #992525',paddingTop:'20px' }}>Subscribe to our channel</h5>
            <p>
              <a href="/" className="text-dark text-decoration-none">Y0U TUBE CHANNEL</a>
            </p>
            <button type='submit' className='btn mt-2 custom-subscribe-btn'>SUBSCRIBE</button>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h1 className="text-center mb-4">GET IN TOUCH</h1>
            <form>
              <div className="mb-3">
                <label className="form-label ">First Name(s)</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom border-dark rounded-0"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name(s)</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom border-dark rounded-0"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email or Phone Number</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom border-dark rounded-0"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <select
                  className="form-select border-0 border-bottom border-dark rounded-0"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <option>Select the Subject</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="donor">Donor</option>
                  <option value="general-inquiry">General Inquiry</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label ">Message</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your message:"
                  rows={4}
                />
              </div>
            <button type="submit" className="btn mt-2 custom-send-btn">
                Send
            </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

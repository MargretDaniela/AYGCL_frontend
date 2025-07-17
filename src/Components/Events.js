import React from 'react';
import '../Styles/Events.css';
import Footer from './Footer';
import event1 from './Images/Adolscent gals hug.jpg';
import event2 from './Images/Psychrist.jpg';
import event3 from './Images/Sikuma growth.jpg';

const Events = () => {
  return (
    <div id="events" style={{ marginTop: '120px' }}>

      {/* --- Header --- */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-3">Upcoming Events</h2>
          <p className="lead">
            Join us in our upcoming outreach programs,
             workshops, and community events that create lasting impact.
          </p>
        </div>
      </section>

      {/* --- Event Cards --- */}
      <section className="container py-5">
        <div className="row g-4">

          {/* Event 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow event-card">
              <img src={event1} className="card-img-top" alt="Event 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Girls Empowerment Camp</h5>
                <p className="card-text"><strong>Date:</strong> August 12, 2025</p>
                <p className="card-text"><strong>Location:</strong> Wakiso District</p>
                <p className="card-text">A 3-day camp filled with mentorship, workshops, and creative sessions for adolescent girls.</p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow event-card">
              <img src={event2} className="card-img-top" alt="Event 2" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Youth Mental Health Forum</h5>
                <p className="card-text"><strong>Date:</strong> September 5, 2025</p>
                <p className="card-text"><strong>Location:</strong> Kampala City</p>
                <p className="card-text">Bringing together youth, psychologists, and educators to discuss mental wellness in schools and homes.</p>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow event-card">
              <img src={event3} className="card-img-top" alt="Event 3" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Backyard Farming Expo</h5>
                <p className="card-text"><strong>Date:</strong> October 3, 2025</p>
                <p className="card-text"><strong>Location:</strong> Gulu District</p>
                <p className="card-text">Hands-on demonstrations and training for families on small-scale farming and food security.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Events;

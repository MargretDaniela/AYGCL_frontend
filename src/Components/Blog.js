import React from 'react';
import '../Styles/Blog.css';
import Footer from './Footer';
import blog1 from './Images/Smiling children.jpg';
import blog2 from './Images/Farming.jpg';
import blog3 from './Images/YOUTH.jpg';

const Blog = () => {
  return (
    <div id="blog" style={{ marginTop: '120px' }}>

      {/* --- Blog Hero Header --- */}
      <section className="text-center py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold mb-3">Our Stories & Insights</h2>
          <p className="lead">
            Dive into real-life stories, updates, and reflections from
             our programs and the lives we touch.
          </p>
        </div>
      </section>

      {/* --- Blog Cards Section --- */}
      <section className="container py-5">
        <div className="row g-4">

          {/* Blog Post 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow blog-card">
              <img src={blog1} className="card-img-top" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Empowering Girls Through Life Skills</h5>
                <p className="card-text">
                  Discover how our life skills workshops are equipping young girls with confidence, leadership, and self-reliance.
                </p>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow blog-card">
              <img src={blog2} className="card-img-top" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title fw-bold">From Backyard Gardens to Full Plates</h5>
                <p className="card-text">
                  A look into how our community farming project is feeding families and fostering sustainability in local homes.
                </p>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow blog-card">
              <img src={blog3} className="card-img-top" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title fw-bold">Voices of Change: Youth Testimonials</h5>
                <p className="card-text">
                  Hear directly from the youth whose lives have been transformed through mentorship, coaching, and safe spaces.
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;

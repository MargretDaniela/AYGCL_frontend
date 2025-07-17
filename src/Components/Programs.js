import React from 'react';
import '../Styles/Programs.css';
import lifeSkills from './Images/LifeSkills.jpg'
import mentorship from './Images/Mentorship and coaching.jpg'
import protectionServices from './Images/ChildProtection.jpg'
import farming from './Images/Sikuma growth.jpg'
import Footer from './Footer'
const Programs = () => { 
  return (
    <div className="" style={{marginTop:'150px'}}>

      {/* View Our Programs */}
      <div className="text-center mb-3">
        <div className="section-line mb-2"></div>
        <h2 className="sub-heading">View Our  <br />
        <span>Programs.</span></h2>
      </div>

        <div className="row align-items-center mb-3">
        {/* Image Left */}
        <div className="col-md-6">
            <img src={farming} alt="Programs" className="img-fluid rounded shadow program-image-small"
             style={{ height: '200px', width: '70%', objectFit: 'cover', marginLeft:'40px' }} />
        </div>
        {/* Text Right */}
        <div className="col-md-6">
            <p className="lead">
            This actually teaches children and the youth small-space <br />
            gardening (soil, composting, seeds, pest control, watering) to <br />
            grow nutritious local food. It promotes healthy diets, reduces <br />
            market reliance and fosters teamwork, patience, and a connection with nature. <br />
            </p>
        </div>
        </div>

      {/* Our Programs Heading */}
      <div className="text-center mb-4">
        <div className="section-line mb-2"></div>
        <h3 className="sub-heading1">Our Programs are</h3>
      </div>

      {/* Program Boxes */}
     <div className='boxes px-3'>
         <div className="row text-center ">
        {/* Box 1 */}
        <div className="col-md-4">
          <div className="program-box p-3 h-100">
            <h5 className="fw-bold mb-3">LIFE SKILLS EDUCATION</h5>
            <img src={lifeSkills} alt="Life Skills" className="program-image img-fluid mb-3" />
            <p>
                Programs under this activity teach key skills like communication, problem-sloving
                ,self-awareness, emotional regulation and decision-making.
            </p>
            <p>
                Life skills education is vital for youth development. It goes beyond academics
            , given children and youth tools to thrive socially, emotionally and econmically.
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-md-4">
          <div className="program-box p-3 h-100">
            <h5 className="fw-bold mb-3">MENTORSHIP AND COACHING</h5>
            <img src={mentorship} alt="Mentorship" className="program-image img-fluid mb-3" 
            style={{ height: '260px', width: '100%', objectFit: 'cover' }}/>
            <p>
                These sessions support children, adolscents and the youth through mentoring.
                Mentors guide personal, academic and career growth.
            </p>
            <p>
                It strengthens social bonds and emotional well-being, reducing youth
                isolation.A supportive adult boosts self-esteem and inspires lasting
                positive behavior.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="program-box p-3 h-100">
            <h5 className="fw-bold mb-3">CLIMATE CHILD PROTECTION SERVICES</h5>
            <img src={protectionServices} alt="Environment" className="program-image img-fluid mb-3"
            style={{height:'260px'}} />
            <p>
                Child Protection Services identity risks, rise awareness, and  prevent abuse,
                neglect and exploitation through community sensizatio, reprting and support
                affected children.  
            </p>
            <p>
                Without safety, children cannot benefit from empowerment efforts
            . A secure enviroment supports emotional stability, learning and healthy 
            relationships.
            </p>
          </div>
        </div>
      </div>
     </div>
      <Footer/>
    </div>
  );
};

export default Programs;

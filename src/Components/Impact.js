import React from 'react';
import CountUp from 'react-countup';

const Impact = () => {
  return (
    <div
      id="impact"
      className="d-flex flex-column justify-content-between"
      style={{
        marginTop: '160px'
      }}
    >
      <div>
        <h2 className="text-center mb-4">Empowered Lives</h2>
        <div className="d-flex justify-content-center flex-wrap gap-5 text-center mb-4">
          {/* Card 1 */}
          <div
            className="border rounded-4 p-4"
            style={{
              width: '200px',
              boxShadow: '0 0.5rem 1rem rgba(128, 0, 0, 0.4)'
            }}
          >
            <h3 className="text-dark fw-bold display-6">
              <CountUp start={0} end={45} duration={2} />
            </h3>
            <p className="mb-0">Children & Youth Empowered</p>
          </div>

          {/* Card 2 */}
          <div
            className="border rounded-4 p-4"
            style={{
              width: '200px',
              boxShadow: '0 0.5rem 1rem rgba(128, 0, 0, 0.4)'
            }}
          >
            <h3 className="text-dark fw-bold display-6">
              <CountUp start={0} end={8} duration={2} />
            </h3>
            <p className="mb-0">Dedicated Staff Members</p>
          </div>

          {/* Card 3 */}
          <div
            className="border rounded-4 p-4"
            style={{
              width: '200px',
              boxShadow: '0 0.5rem 1rem rgba(128, 0, 0, 0.4)'
            }}
          >
            <h3 className="text-dark fw-bold display-6">
              <CountUp start={0} end={4} duration={2} />
            </h3>
            <p className="mb-0">Years of Impact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;

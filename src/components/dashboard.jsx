import React from 'react';
import Iframe from '@trendmicro/react-iframe';

const Dashboard = () => {
    return (
      <div id="dashboard" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Dashboard</h2>
              <Iframe 
              width="100%"
              height="330px" 
              src="https://datastudio.google.com/embed/reporting/41549d3c-85be-498f-b714-9445d0a41539/page/hOauB" 
              />
              <Iframe 
              width="100%"
              height="1250px" 
              src="https://datastudio.google.com/embed/reporting/ed31653f-3ea1-425b-a69b-e683ce81ac60/page/hOauB" 
              />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;

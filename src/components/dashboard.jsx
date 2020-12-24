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
              height="100%" 
              src="https://datastudio.google.com/embed/reporting/1991e922-229e-479b-b05e-a9e87988095e/page/VgD" 
              // frameborder="0" 
              // style="border:0" 
              // allowfullscreen="true"
              />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;

import React, { useState } from 'react';
import Registration from './registration.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Events = (props) => {

    return (
      <div id="events" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Events</h2>
          </div>
          <div id="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div  key={`${d.eventName}-${i}`} className="col-md-3 col-sm-6 team">
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.eventName}</h4>
                        <p>{d.address}</p>
                       {/* <a href='https://www.freecodecamp.org/'><button>Register</button></a> */}
                       <Router>
                        <div>
                      
                          <ul>
                            <li>
                            <Link to="/registration"><button>Register</button></Link>
                            </li>
                            <li>
                              {/* <Link to="/about">About</Link> */}
                            </li>
                            <li>
                              {/* <Link to="/dashboard">Dashboard</Link> */}
                            </li>
                          </ul>
                          <Switch>
                            <Route exact path="/registration">
                              <Registration />
                            </Route>
                          </Switch>
                        </div>
                        </Router>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
}

export default Events;
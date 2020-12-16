import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
 

const Events = (props) => {

  const [open, setOpen] = useState(false);
 
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
                        <button onClick={onOpenModal}>Register</button>
                        <Modal open={open} onClose={onCloseModal} center>
                          <h2>Simple centered modal</h2>
                        </Modal>
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

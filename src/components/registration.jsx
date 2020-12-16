// import React, { Component } from "react";

// class Registration extends Component {
//   render() {
//     return (
      
//      <div className="registration">
//           <form name="sentMessage" id="contactForm" noValidate>
//                   <div className="row">
//                     <div className="">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           id="name"
//                           className="form-control"
//                           placeholder="Name"
//                           required="required"
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                     <div className="">
//                       <div className="form-group">
//                         <input
//                           type="email"
//                           id="email"
//                           className="form-control"
//                           placeholder="Email"
//                           required="required"
//                         />
//                         <p className="help-block text-danger"></p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       id="message"
//                       className="form-control"
//                       rows="4"
//                       placeholder="Message"
//                       required
//                     ></textarea>
//                     <p className="help-block text-danger"></p>
//                   </div>
//                   <div id="success"></div>
//                   <button type="submit" className="btn btn-custom btn-lg">
//                     Send Message
//                   </button>
//                 </form>
//             </div>
//         );
//     }
//     }

// export default Registration;

import React, { useState } from "react";

import {
  Card,
  CardBody,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input,
} from 'reactstrap';

const Registration = () => {
  const [data, setData] = useState ({
    name:"",
    email:"",
    account:"",
    phone:"",
    province:"",
    town:""
  });

  const {name,email,phone,account,province,town} = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value})
  }
 
const handleSubmit = async (e) => {
  e.preventDefault();
  alert("Successfully submitted👍");
  
  try{
    const response = await fetch(
      "https://v1.nocodeapi.com/rey12/google_sheets/phNpAEVUJmlYKctq?tabId=Sheet1",
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([
          [name,email,account,phone,province,town, new Date().toLocaleString()],
        ]),
    }
  );
    await response.json();
    setData({ ...data, name: "", email: "",phone: "",account: "",province: "", town: ""});
  }catch(err){
    console.log(err)
  }
}

return (
  <Card>
    <CardBody>
    <div className="d-flex align-items-center">
      <Form className="attendanceform" onSubmit={handleSubmit}>
          <hr/>
          <h3>Leg 4 Registration Form</h3>
          <FormGroup >
            <Input 
              required
              type="text" 
              name="name" 
              className="attinputClass"
              placeholder="Employee Name"
              value={name}
              onChange={handleChange} 
            />
          </FormGroup>
          <FormGroup>
         
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="email" 
              placeholder="Company Email"
              value={email}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
            <Input 
                required
                className="attinputClass"
                type="text" 
                name="phone" 
                placeholder="Phone Number"
                value={phone}
                onChange={handleChange} 
              />
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={account}   onChange={handleChange}   name="account" id="exampleAccount">
              <option  value=" ">--Choose Account--</option>
              <option value="ADMIN">ADMIN</option>
              <option value="B2B">B2B</option>
              <option value="BB">BB</option>
              <option value="BIZ DEV">BIZ DEV</option>
              <option value="CLX">CLX</option>
              <option value="COMPLIANCE & REGULATORY">COMPLIANCE & REGULATORY</option>
              <option value="CSE">CSE</option>
              <option value="DATA CORE">DATA CORE</option>
              <option value="DENVER">DENVER</option>
              <option value="DFX">DFX</option>
              <option value="FACILITIES">FACILITIES</option>
              <option value="FINANCE">FINANCE</option>
              <option value="HR Dept">HR Dept</option>
              <option value="IT Dept">IT Dept</option>
              <option value="PBC">PBC</option>
              <option value="PLANO">PLANO</option>
              <option value="RB">RB</option>
              <option value="RECRUITMENT">RECRUITMENT</option>
              <option value="Security">Security</option>
              <option value="SFY">SFY</option>
              <option value="SG">SG</option>
              <option value="TRNG">TRNG</option>
              <option value="UTILITY">UTILITY</option>
              <option value="VOC">VOC</option>
              <option value="WFXMD">WFXMD</option>
              <option value="WFXMN">WFXMN</option>
              <option value="XMT">XMT</option>
              <option value="SS360">SS360</option>
              <option value="UMA">UMA</option>
              <option value="IND">IND</option>
              <option value="SHOP">SHOP</option>
              <option value="PIPE">PIPE</option>
              <option value="TLC">TLC</option>
              <option value="FAN">FAN</option>
              <option value="BXO">BXO</option>
              <option value="STAR">STAR</option>
              <option value="WIL">WIL</option>
              <option value="Others">Others</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="town" 
              placeholder="City/Town"
              value={town}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
         
            <Input 
              required
              className="attinputClass"
              type="text" 
              name="province" 
              placeholder="Province"
              value={province}
              onChange={handleChange} 
            />
          </FormGroup>
          <Button className="feedbutton">Submit</Button>
      </Form>
    </div>
    </CardBody>
  </Card>
  );
};

export default Registration;

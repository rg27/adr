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

const Attendance = () => {
  const [data, setData] = useState ({
    firstName:"",
    lastName:"",
    birthdate:"",
    gender:"",
    facebookName:"",
    team:"",
    bibName:"",
    category:"",
    shirtSize:"",
    emailAddress:"",
    contactNumber:"",
    shippingAddress:"",
    country:"",
    preferredModeOfPayment:"",
  
  });

  const {firstName,lastName,birthdate, gender, facebookName,team,bibName,category, shirtSize,contactNumber,emailAddress, shippingAddress, country, preferredModeOfPayment} = data;

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value})
  }
 
const handleSubmit = async (e) => {
  e.preventDefault();
  alert("Successfully submitted👍");
  window.location.href = "/";
  
  try{
    const response = await fetch(
      "https://v1.nocodeapi.com/rey12/google_sheets/zdcehjxeDCSAzqho?tabId=Raw",
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([
          [firstName,lastName,birthdate, gender, facebookName,team,bibName,category, shirtSize,contactNumber,emailAddress, shippingAddress, country, preferredModeOfPayment, new Date().toLocaleString()],
        ]),
    }
  );
    await response.json();
    setData({ ...data, firstName: "", lastName: "",birthdate: "", gender: "",facebookName: "",team: "",contactNumber:"", category: "", bibName: "",shirtSize: "", emailAddress: "",shippingAddress: "", country: "" , preferredModeOfPayment: ""});
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
          <h3>Leg 4 Attendance Form</h3>
          <FormGroup >
            <Input 
              required
              type="text" 
              name="firstName" 
              className="attinputClass"
              placeholder="First Name"
              value={firstName}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="lastName" 
              className="attinputClass"
              placeholder="Last Name"
              value={lastName}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={gender}   onChange={handleChange}   name="gender" id="examplegender">
              <option  value=" ">--Choose Gender--</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Input>
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="facebookName" 
              className="attinputClass"
              placeholder="Facebook Name"
              value={facebookName}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="date" 
              name="birthdate" 
              className="attinputClass"
              placeholder="Birthdate"
              value={birthdate}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="team" 
              className="attinputClass"
              placeholder="Team"
              value={team}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="bibName" 
              className="attinputClass"
              placeholder="BIB Name"
              value={bibName}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="email" 
              name="emailAddress" 
              className="attinputClass"
              placeholder="Email Address"
              value={emailAddress}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={category}   onChange={handleChange}   name="category" id="examplecategory">
              <option  value=" ">--Choose Category--</option>
              <option value="200">200</option>
              <option value="400">400</option>
              <option value="500">500</option>
              <option value="800">800</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Input type='select' required  value={shirtSize}   onChange={handleChange}   name="shirtSize" id="exampleshirtSize">
              <option  value=" ">--Choose Shirt Size--</option>
              <option value="XS">XS</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
              <option value="XL">XL</option>
            </Input>
          </FormGroup>

          
          <FormGroup >
            <Input 
              required
              type="number" 
              name="contactNumber" 
              className="attinputClass"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="shippingAddress" 
              className="attinputClass"
              placeholder="Shipping Address"
              value={shippingAddress}
              onChange={handleChange} 
            />
          </FormGroup>

          <FormGroup >
            <Input 
              required
              type="text" 
              name="country" 
              className="attinputClass"
              placeholder="Country"
              value={country}
              onChange={handleChange} 
            />
          </FormGroup>


          <FormGroup>
            <Input type='select' required  value={preferredModeOfPayment}   onChange={handleChange}   name="preferredModeOfPayment" id="examplepreferredModeOfPayment">
              <option  value=" ">--Choose Mode of Payment--</option>
              <option value="Onsite">Onsite</option>
              <option value="GCASH">GCASH</option>
              <option value="BDO">BDO</option>
              <option value="BPI">BPI</option>
            </Input>
          </FormGroup>
  
          <Button className="feedbutton">Submit</Button>
      </Form>
    </div>
    </CardBody>
  </Card>
  );
};

export default Attendance;

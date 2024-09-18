import React from 'react'
import {Card, CardBody, Row, Col, CardHeader, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
 

function DoctorProfile() {
  return (
    <div>
        <Card className='my-5 mx-5'>
            <CardHeader>
                <b>Update your Profile</b>
            </CardHeader>
            <CardBody>
         <Form>
            <Row>
                <Col>
                <FormGroup>
                <Label for="exampleEmail">
                Medical school attended
                </Label>
                <Input
                id="meddegree"
                name="degree"
                placeholder="with a placeholder"
                type="text"
                />
            </FormGroup>
            
                </Col>
                <Col>
                <FormGroup>
                <Label for="examplePassword">
                Hospital or clinic Affiliation
                </Label>
                <Input
                id="affiliation"
                name="hospital"
                placeholder="Affiliation"
                type="text"
                />
            </FormGroup>
                </Col>
                <Col>
                <FormGroup>
                <Label for="examplePassword">
                Years of experience
                </Label>
                <Input
                id="experience"
                name="experience"
                placeholder="years of experience"
                type="number"
                />
            </FormGroup>
                </Col>
            </Row>
           <Row>
            <Col>
            <FormGroup>
                <Label for="exampleSelect">
                Area of Specialisation
                </Label>
                <Input
                id="area"
                name="area"
                type="select"
                >
                <option selected>
                    Select your area of specialisation
                </option>
                <option>
                    Dentist
                </option>
                <option>
                    Gynicologist
                </option>
                <option>
                    Optologist
                </option>
             
                </Input>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label for="exampleSelect">
                Select
                </Label>
                <Input
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    1
                </option>
                <option>
                    2
                </option>
                <option>
                    3
                </option>
                <option>
                    4
                </option>
                <option>
                    5
                </option>
                </Input>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label for="exampleSelect">
                Select
                </Label>
                <Input
                id="exampleSelect"
                name="select"
                type="select"
                >
                <option>
                    1
                </option>
                <option>
                    2
                </option>
                <option>
                    3
                </option>
                <option>
                    4
                </option>
                <option>
                    5
                </option>
                </Input>
            </FormGroup>
            </Col>
           </Row>
           
            <Row>
                <Col>
                <FormGroup>
                <Label for="exampleText">
               List of Certifications
                </Label>
                <Input
                id="exampleText"
                name="text"
                type="textarea"
                />
            </FormGroup>
                </Col>
                <Col>
                     <FormGroup>
                <Label for="exampleFile">
                Upload Certificate
                </Label>
                <Input
                id="exampleFile"
                name="file"
                type="file"
                />
                {/* <FormText>
                This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                </FormText> */}
            </FormGroup>
                </Col>
            </Row>
           
            <Row>
                <Col>
                <FormGroup tag="fieldset">
                <Label>
               Method of Identification
                </Label>
                <FormGroup check>
                <Input
                    name="radio1"
                    type="radio"
                />
                {' '}
                <Label check>
                   National ID card
                </Label>
                </FormGroup>
                <FormGroup check>
                <Input
                    name="radio1"
                    type="radio"
                />
                {' '}
                <Label check>
                   BVN
                </Label>
                </FormGroup>
                <FormGroup
                check
                
                >
                <Input
                    
                    name="radio1"
                    type="radio"
                />
                {' '}
                <Label check>
                   Driver's License
                </Label>
                </FormGroup>
            </FormGroup>
                </Col>
                <Col>
                </Col>
            </Row>
            <FormGroup>
               
               <Label>
                   ID number
               </Label>
               <Input 
               id='idnumber'
               name='idnumber'
               type='number'>
               </Input>
               
               
           </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                I agree with the privacy policy
                </Label>
            </FormGroup>
          
            <Button>
                Submit
            </Button>
            </Form>
            </CardBody>
        </Card>
    </div>
  )
}

export default DoctorProfile
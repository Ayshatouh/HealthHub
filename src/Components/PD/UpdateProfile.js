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
                Full Name
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
                Contact Address
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
                Residential Address
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
                Phone Number
                </Label>
                <Input
                id="area"
                name="area"
                type="text"
                />
                
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
                <Label for="exampleSelect">
                Emergency Phone Number
                </Label>
                <Input
                id="area"
                name="area"
                type="text"
                />
                
            </FormGroup>
            </Col>

            <Col>
            <FormGroup>
                <Label for="exampleSelect">
                Next of Kin
                </Label>
                <Input
                id="area"
                name="area"
                type="text"
                />
                
            </FormGroup>
            </Col>
           </Row>
           <Row>
            <span>Allegy(Select all that appliers to you)</span>
            
           <Col>
           <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                Egg
                </Label>
                </FormGroup>
          
           <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                Fish
                </Label>
                </FormGroup>
           
           <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                Milk
                </Label>
                </FormGroup>
           
           <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                Peanut
                </Label>
                </FormGroup>
           
           <FormGroup check>
                <Input type="checkbox" />
                {' '}
                <Label check>
                Soy
                </Label>
                </FormGroup>
           </Col>
          
           </Row>
           <Row>
           <Col>
           <FormGroup>
                <Input type="text" className= 'my-3' style={{width:'300px'}} />
                {' '}
                <Label>
                Others
                </Label>
                </FormGroup>
           </Col>
           </Row>
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
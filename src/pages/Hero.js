import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Row,Col, Button, Card,Accordion,Form} from 'react-bootstrap'
import { FaLocationArrow } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { LuCircleFadingArrowUp } from "react-icons/lu";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div>
       
       <Navbar expand="lg" className="bg-body-tertiary" style={{height:"10vh"}}>
      <Container style={{padding:"10px"}}>
         
     
         <Navbar.Brand href="#home" className='descFont'>APPLY <span style={{color:"green",fontWeight:"bold"}}>ABROAD</span></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        

      

      </Container>
       </Navbar>

    <div style={{height:"auto",backgroundImage:"linear-gradient(to right,#ffe9b0,white)",width:"100%",display:"grid",placeItems:"center",paddingTop:"100px",paddingBottom:"100px"}} >
            <Container >
                
            <Row>
              <Col lg = {6} style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                 
                 <motion.div
                   
                   initial = {{x:-100}}
                   animate = {{x:0}}

                 >
                 <h1 className='headerFont' style={{fontSize:"100px"}}>Apply Now for MBBS <span style={{fontWeight:"",color:"green"}}>ABROAD</span></h1>
                 <p></p>
                 <h3 className='descFont' style={{fontSize:"20px",fontWeight:"300"}}>We offer great services that will fullfill<p></p>
                  Your desire to have education from Abroad
                  ......
                  </h3>
                  <p></p>
                 <Button size='lg' className='descFont' style={{fontWeight:"bold"}} variant='success' >Apply Now <FaLocationArrow/></Button>
                 </motion.div>
                 
              </Col>
              <Col lg = {6}>
                <img src = {"https://vandanasacademy.com/wp-content/uploads/2023/08/gifts-studyabroad.png"} style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"15px"}} />
              </Col>
           </Row>

            </Container>
    </div>
    <p></p>
    <div style={{width:"100%",display:"grid",placeItems:"center",paddingTop:"50px",paddingBottom:"50px"}}>

        <Container>
              <h1 className='headerFont'>Key Benefits <CiStar/></h1>
              <ul>
                 <li style={{margin:"15px"}}>
                    <h4 className='descFont' style={{fontWeight:"250"}}> Studying Abroad Will Make Your life Better By Getting Better <span style={{fontWeight:"bold",color:"green"}}>Quality Education</span> </h4>
                 </li>

                 <li style={{margin:"15px"}}>
                    <h4 className='descFont' style={{fontWeight:"250"}}> It will help You With Meeting New People From <span style={{fontWeight:"bold",color:"green"}}>All Over The World </span></h4>
                 </li>
                 <li style={{margin:"15px"}}>
                    <h4 className='descFont' style={{fontWeight:"250"}}> You Will Be Able To Explore <span style={{fontWeight:"bold",color:"green"}}> New Places </span> </h4>
                 </li>
                 <li style={{margin:"15px"}}>
                    <h4 className='descFont' style={{fontWeight:"250"}}> You Will Be Able To Get Participated With The <span style={{fontWeight:"bold",color:"green"}}>New Cultures</span> </h4>
                 </li>
                 <li style={{margin:"15px"}}>
                    <h4 className='descFont' style={{fontWeight:"250"}}> You Will Be Able To Learn <span style={{fontWeight:"bold",color:"green"}}>Different Kind Of Languages</span></h4>
                 </li>
              </ul>

        </Container>

    </div>

    <div style={{width:"100%",display:"grid",placeItems:"center",marginTop:"50px",marginBottom:"50px",backgroundColor:"#daffe9"}}>

        <Container style={{paddingTop:"5%",paddingBottom:"5%"}}>
           
           <h1 className='headerFont'>Top Countries <CiFlag1/></h1>
           <p></p>
           <Row>
               
               <Col lg = {4} style={{padding:"10px"}}>
              
                  <Card>
                    <Card.Body>
                        
                        <motion.div whileHover={{scale:1.2}}>
                        <img src={'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Russia</h1>
                    </Card.Footer>
                  </Card>
               
               
               </Col>
               <Col lg = {4} style={{padding:"10px"}}>
                  <Card>
                    <Card.Body>
                    <motion.div whileHover={{scale:1.2}}>
                        <img  src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/800px-Flag_of_Kazakhstan.svg.png'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                     
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Uzbekistan</h1>
                    </Card.Footer>
                  </Card>
               </Col>
               <Col lg = {4} style={{padding:"10px"}}>
                  <Card>
                    <Card.Body>
                    <motion.div whileHover={{scale:1.2}}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1280px-Flag_of_the_Philippines.svg.png'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                       
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Philippines</h1>
                    </Card.Footer>
                  </Card>
               </Col>
               <Col lg = {4} style={{padding:"10px"}}>
                  <Card>
                    <Card.Body>
                    <motion.div whileHover={{scale:1.2}}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/640px-Flag_of_Georgia.svg.png'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                       
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Georgia</h1>
                    </Card.Footer>
                  </Card>
               </Col>
               <Col lg = {4} style={{padding:"10px"}}>
                  <Card>
                    <Card.Body>
                    <motion.div whileHover={{scale:1.2}}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/1200px-Flag_of_Kyrgyzstan.svg.png'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                    
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Kyrgyzstan</h1>
                    </Card.Footer>
                  </Card>
               </Col>
               <Col lg = {4} style={{padding:"10px"}}>
                  <Card>
                    <Card.Body>
                    <motion.div whileHover={{scale:1.2}}>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/800px-Flag_of_Egypt.svg.png'} style={{width:"100%",height:"250px"}} />
                        </motion.div>
                        
                    </Card.Body>
                    <Card.Footer style={{display:"grid",placeItems:"center"}}>
                        <h1 className='headerFont'>Egypt</h1>
                    </Card.Footer>
                  </Card>
               </Col>
               

           </Row>

        </Container>

    </div>

    <div style={{width:"100%",display:"grid",placeItems:"center",marginTop:"50px",marginBottom:"50px"}}>

            <Container>
               <h1 className='headerFont'> Steps For Application Proccess <LuCircleFadingArrowUp/> </h1>
               <p></p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4 className='descFont'>Research and Select a University:</h4></Accordion.Header>
                    <Accordion.Body>
                     <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                      <li>    Explore various countries offering MBBS programs and compare their quality, cost, and accreditation. </li>
                 
                   
                      <li>      Check the specific eligibility criteria for each university. </li>
                 
                   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>
              
                <Accordion.Item eventKey="1">
                <Accordion.Header><h4 className='descFont'>Check Eligibility and Qualify NEET:</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li>   Ensure you meet the academic requirements usually 10+2 with Physics, Chemistry, and Biology </li>
                 
                   
                      <li>    If required by your chosen country, take and clear the National Eligibility cum Entrance Test (NEET).  </li>
                 
                   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>

                
                <Accordion.Item eventKey="2">
                <Accordion.Header><h4 className='descFont'>Gather Required Documents:</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li>   Academic transcripts (10th and 12th marksheets)  </li>
                 
                   
                      <li>   Passport with sufficient validity  </li>
                      <li>   Birth certificate  </li>
                      <li>  Medical certificate  </li>
                      <li>   Passport-sized photographs   </li>
                      <li>  NEET scorecard (if applicable)   </li>
                      
                   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>
               

                <Accordion.Item eventKey="3">
                <Accordion.Header><h4 className='descFont'>Submit Application Form:</h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li>   Access the online application form on the chosen university's website.   </li>
                 
                   
                      <li>   Fill in all personal details, academic information, and upload required documents  </li>
                      
                      
                   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>

                
                <Accordion.Item eventKey="4">
                <Accordion.Header><h4 className='descFont'>Entrance Exams or Interviews (if required): </h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li>  Prepare for and appear for any additional entrance exams or interviews conducted by the university.    </li>   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                <Accordion.Header><h4 className='descFont'>Admission Letter: </h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li>  Upon successful evaluation, the university will send you an admission letter confirming your acceptance.    </li>   
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                <Accordion.Header><h4 className='descFont'>Apply for Student Visa: </h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li> Initiate the visa application process at the relevant embassy or consulate of your chosen study destination.     </li> 
                      <li> Submit all necessary documents and attend visa interviews if required.      </li>     
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                <Accordion.Header><h4 className='descFont'>Important Points to Consider: </h4></Accordion.Header>
                    <Accordion.Body>
                    <ul style={{fontWeight:"300",fontSize:"20px"}} className='descFont'>
                    
                      <li> Accreditation: Always check if the university is recognized by the Medical Council of India (MCI) or other relevant medical bodies to ensure your degree will be valid in your home country.     </li> 
                      <li> Cost of Education: Compare tuition fees and overall living expenses in different countries.     </li>   
                      <li> Language Proficiency: If necessary, take English language proficiency tests like IELTS or TOEFL.     </li> 
                      <li> Medical Fitness: Ensure you meet the medical requirements of the chosen university.     </li>     
                     </ul>
                    </Accordion.Body>
                </Accordion.Item>
               
               
               
                </Accordion>

            </Container>

    </div>

    <div style={{width:"100%",display:"grid",placeItems:"center",marginTop:"50px",marginBottom:"50px",backgroundColor:"#daffe9"}}>

        <Container style={{paddingTop:"100px",paddingBottom:"100px"}}>
           
           <Row>
              <Col lg = {6}>
              <Form style={{width:"80%"}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Name" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Country Preference</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country Preference" />
                </Form.Group>

               

                <Button size='md' className='descFont' style={{fontWeight:"bold"}} variant='success' >Contact Us</Button>
                </Form>

              </Col>

              <Col lg = {6}>
                 <img src={'https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-call-center-operator-icon-flat-style-png-image_1977957.jpg'} style={{width:"100%",height:"500px",objectFit:"cover",borderRadius:"15px"}}/>
              </Col>
           </Row>

        </Container>

    </div>
            



    </div>
  )
}

export default Hero
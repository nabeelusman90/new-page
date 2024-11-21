import React from "react";
import '../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Image, Carousel, Row, Col, Card, Breadcrumb } from "react-bootstrap";
import img from './web-develpment/website-development.jpg'
import icon1 from "./web-develpment/icon-1.svg";
import icon2 from  "./web-develpment/icon-2.svg";
import icon3 from "./web-develpment/icon-3.svg";
import icon4 from"./web-develpment/icon-4.svg";
import icon5 from "./web-develpment/icon-5.svg";
import icon6 from "./web-develpment/icon-6.svg";



import hourBase from"./web-develpment/hour-base.svg";
import projectBase from "./web-develpment/project-base.svg";
import dedicatedDeveloper from "./web-develpment/dedicated-developers.svg";
import notSure from "./web-develpment/not-sure.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Clients from "./Clients";





function Newpage() {
    
  return (
    <>
      <Col className="back-pic-1">
      <Container className="generalHero  px-lg-5 px-3 pt-4">
        <div className="d-flex justify-content-start">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Services</Breadcrumb.Item>
            <Breadcrumb.Item active>Web Development</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      {/* -------------------------------------------- */}

      <Container className="py-4 ">
        <Row>
          <Col lg={7} md={7} className="px-4 px-lg-0">
            <div>
              <h1 className="Banner-module--mainHeading--1JWbm colorrr">Web Design and Development Services</h1>
              <div className="Banner-module--subHeading--1z4JK pb-2 pt-2 mr-2">Outsource web design and development to a creative team of web developers</div>
              <div className="pb-2 mr-3">Get seasoned web development experts who ramp up quickly, and readily contribute to your business success.</div>
              <div className="pb-2 mr-3">Communicate and collaborate to stay updated with every development in the project.</div>
              <div className="pb-2 mr-3">Onboard dedicated web developers and designers for your mission-critical web projects.</div>
              <a href="/get-a-quote">
                <button style={{background:"#D61C4E",padding:"12px 17px",border:"none",color:"white"}} type="button" className="custom-btn-1 rounded-pill mt-3">
                  <span>Discuss your Project</span>
                </button>
              </a>
            </div>
          </Col>
          <Col lg={5} md={5} className="px-4 pt-3 px-lg-0">
            <div className="text-center  py-2 ">
            <img src={img} fluid  />

            </div>
          </Col>
        </Row>
      </Container>
      </Col>
      {/* -------------------------------------------- */}
      <div className="py-md-4" style={{ backgroundColor: "#FFF8F2" }}>
        <Container className="py-3 py-lg-0 px-4">
          <div className="p-1 px-md-3 ">
            <Row>
              <div className="col-md-11 col-sm-12">
                <h2 className="main-heading-36 pb-3">
                  Hire&nbsp;
                  <span>
                    Web Design <br /> and Development
                  </span>
                  &nbsp; Experts
                </h2>
              </div>
            </Row>
            <Row>
              <div className="col-md-11 col-sm-12">
                <div className="pr-md-4 develop">
                  Wellcreator provides a host of web designing and development services for global clients.
                  <br />
                  Our main motto is "
                  <span>
                    <b>Design, Develop & Deploy.</b>
                  </span>
                  " <br />
                </div>
              </div>
            </Row>
          </div>

          <Row className="pt-2">
            <Col md={4} className="p-0 p-md-2 ">
              <Card className="h-100 SubServices-module--subserviceCard--2wTxx border-0 " style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <Card.Body>
                  <div className="pb-3">
                  <img src={icon1} alt="Prototyping &amp; UI/UX Designing" />

                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">Prototyping &amp; UI/UX Designing</h3>
                  </div>
                  <p className="card-text">
                    Our skillful engineers create interactive prototyping and usability testing to ensure a project with a pleasant user experience. Hire professional UI/UX designers to create
                    meaningful interfaces that enable users to feel comfortable while using your platform.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="p-0 p-md-2 ">
              <div className="h-100 SubServices-module--subserviceCard--2wTxx border-0 card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                <Image src={icon2} alt="Progressive Web Development" />

                  <div className="pb-3">
                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">Progressive Web Development</h3>
                  </div>
                  <p className="card-text">
                    We use progressive enhancement strategies to develop cross-platform web applications. Hire experienced web developers to build responsive Progressive Web Applications (PWAs) and
                    ensure high performance in both online and offline modes.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="p-0 p-md-2 ">
              <div className="h-100 SubServices-module--subserviceCard--2wTxx border-0 card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                  <div className="pb-3">
                  <Image src={icon3} alt="Progressive Web Development" />

                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">Custom Website Development</h3>
                  </div>
                  <p className="card-text">
                    We ideate and plan to design and develop custom web solutions to connect our clients with their customers efficiently. Let’s develop feature-rich, highly functional, secure, and
                    scalable custom web solutions by engaging UI/UX design that enhances your brand.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="p-0 p-md-2 ">
              <div className="h-100 SubServices-module--subserviceCard--2wTxx border-0 card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                  <div className="pb-3">
                  <Image src={icon4} alt="Progressive Web Development" />

                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">Full Stack Development</h3>
                  </div>
                  <p className="card-text">
                    We have a team of skilled full-stack developers with expertise in MEAN and MERN stack. You can hire frontend and backend development teams separately as well. Get full-stack
                    development on MEAN, MERN, PHP + Vue.js, .Net + JS, to name a few.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="p-0 p-md-2 ">
              <div className="h-100 SubServices-module--subserviceCard--2wTxx border-0 card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                  <div className="pb-3">
                  <Image src={icon5} alt="Progressive Web Development" />

                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">API Development</h3>
                  </div>
                  <p className="card-text">
                    Our web development team is highly experienced in APIs, custom data connectors, web services, and middleware for secure integration with third-party solutions. You can outsource
                    API development projects to develop fully functional APIs.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4} className="p-0 p-md-2 ">
              <div className="h-100 SubServices-module--subserviceCard--2wTxx border-0 card" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                <div className="card-body">
                  <div className="pb-3">
                  <Image src={icon6} alt="Progressive Web Development" />

                  </div>
                  <div className="card-title h5">
                    <h3 className="h5">Upgradation and Migration</h3>
                  </div>
                  <p className="card-text">
                    Our team of web developers and designers has expertise in developing solutions using the newest technologies. Whether you want to upgrade outdated web technology or want to migrate
                    to a new CMS, we have skilled web developers and designers to make it possible.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* -------------------------------------------- */}

      <div className="webDevCard">
        <div className="text-center">
          <Container className="py-3 py-lg-5">
            <Row className="text-center">
              <h1>
                <span>Hire</span> Dedicated Web Developers
              </h1>
              <h3>
                Choose How<span> YOU WANT </span>to Collaborate
              </h3>
            </Row>
            <Row className="justify-content-center pt-lg-5 px-3">
              <Col lg={3} md={6} className="py-3 h-100 py-lg-0">
                <ScrollAnimation className="" animateIn="animate__fadeInUp" delay={200}>
                  <Card className="  py-lg-3" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                    <Card.Body className="p-lg-2">
                      <Image src={projectBase} style={{ height: "50%", width: "50%" }} />
                      <Card.Title className="mt-3">Project-Based</Card.Title>
                    </Card.Body>
                  </Card>{" "}
                </ScrollAnimation>
              </Col>
              <Col lg={3} md={6} className=" py-3 h-100 py-lg-0">
                <ScrollAnimation className="" animateIn="animate__fadeInUp" delay={300}>
                  <Card className="  py-lg-3" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                    <Card.Body className="p-lg-2">
                      <Image src={hourBase} style={{ height: "50%", width: "50%" }} />
                      <Card.Title className="mt-3">Hire on Hourly Basis</Card.Title>
                    </Card.Body>
                  </Card>
                </ScrollAnimation>
              </Col>
              <Col lg={3} md={6} className="py-3 h-100 py-lg-0">
                <ScrollAnimation className="" animateIn="animate__fadeInUp" delay={400}>
                  <Card className="  py-lg-3" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                    <Card.Body className="p-lg-2">
                      <Image src={dedicatedDeveloper} style={{ height: "50%", width: "50%" }} />
                      <Card.Title className="mt-3">Dedicated Developers</Card.Title>
                    </Card.Body>
                  </Card>
                </ScrollAnimation>
              </Col>
              <Col lg={3} md={6} className="py-3 h-100 py-lg-0">
                <ScrollAnimation className="" animateIn="animate__fadeInUp" delay={500}>
                  <Card className="  py-lg-3" style={{ borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
                    <Card.Body className="p-lg-2">
                      <Image src={notSure} style={{ height: "50%", width: "50%" }} />
                      <Card.Title className="mt-3">I'm not sure</Card.Title>
                    </Card.Body>
                  </Card>
                </ScrollAnimation>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Clients/>
    </>
  );
}

export default Newpage;

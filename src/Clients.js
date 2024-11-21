import React from "react";
import ProgressBar from "react-scroll-progress-bar";
import { Container, Card, Image, Button, Carousel, Col, Row, Tabs, Tab } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { height, width } from "dom-helpers";



function Clients() {
  return (
    <>
      {/* *******************************************************Happy Client start ****************************************************** */}
      <div className="client py-lg-5 py-5" style={{ zIndex: "-1!important" }}>
        <Container>
          <div className="text-center ">
            <p className="mb-0">

              <strong>Some of our Clients</strong>
            </p>
            <h2 className="text-color py-2">Our Happy Custom</h2>
          </div>
          <div className=" self-align-center text-center pt-lg-5 pb-lg-5 pt-0 mt-0">
            <Splide
              options={{
                type: "loop",
                gap: "2rem",
                autoplay: false,
                pauseOnHover: false,
                resetProgress: false,
                zIndex: "-4",
                breakpoints: {
                  2560: { perPage: 6, perMove: 1 },
                  1440: { perPage: 5, perMove: 1 },
                  768: { perPage: 3, perMove: 1 },
                  480: { perPage: 2, perMove: 1 },
                  320: { perPage: 1, perMove: 1 },
                },
              }}
              hasSliderWrapper
              hasAutoplayControls
              hasAutoplayProgress
            >


              <SplideSlide className="align-self-center">
                <a target="blank" href="https://platlhr.gov.pk/">
                  <img src="./clients/PLAT_LOGO-removebg-preview.png" style={{ height: "70px", width: "auto", zIndex: "-1!important" }} alt="Image 2" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://myauctionsheet.com/">
                  <img src="./clients/myauctionsheet.png" style={{ height: "70px", width: "auto" }} alt="Image 4" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a href="https://enviro.com.pk/" target="_blank">
                  <img src="./clients/Enviro-Logo-PNG.png" style={{ height: "70px", width: "auto" }} alt="Image 4" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://citybook.pk/">
                  <img src="./clients/citybook.jpeg" style={{ height: "70px", width: "auto", zIndex: "-1" }} alt="Image 3" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a href="https://www.nestle.pk/" target="_blank">
                  <img
                    src="data:image/jpeg;base64,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"
                    style={{ height: "70px", width: "auto" }}
                    alt="Image 4"
                  />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center" style={{ position: "relative" }}>
                <a href="https://autodeals.pk/" target="_blank">
                  <img
                    src="./clients/autodeals.png"
                    style={{
                      height: "40px",
                      width: "auto",
                      // marginLeft: "20px",

                    }}
                    alt="autodeals"
                  />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <img src="./clients/dailyPaigam.png" style={{ height: "70px", width: "auto" }} alt="Image 4" />
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a href="https://listnetworks.com/pakistan" target="_blank">
                  <img src="./clients/listnetworks.png" style={{ height: "70px", width: "auto" }} alt="Image 4" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://beautifulglobal.com/">
                  <img style={{ cursor: "pointer", height: "20px", width: "auto" }} src="./clients/BG.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://connecting.pk/">
                  <img style={{
                    cursor: "pointer", height: "60px", padding: "10px", marginLeft: "2rem",
                  }} src="./clients/connecting.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://alitechlocal.uk/">
                  <img style={{ cursor: "pointer", height: "70px", width: "auto" }} src="./clients/ALiTech.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://toyotawalton.com/?gclid=Cj0KCQjw0umSBhDrARIsAH7FCocss1x7J5hDa9idyjjHP5-z8uf8m7JI2XWOeHaRFel5m51wHTxbpaYaAom0EALw_wcB">
                  <img style={{ cursor: "pointer", height: "70px", width: "auto" }} src="./toyota.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="http://www.aki.com.pk/">
                  <img style={{ cursor: "pointer", height: "70px", width: "auto" }} src="./clients/aki_logo.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="https://www.pmc.gov.pk/">
                  <img style={{ cursor: "pointer", height: "70px", width: "auto" }} src="./PMC.png" />
                </a>
              </SplideSlide>
              <SplideSlide className="align-self-center">
                <a target="blank" href="http://www.pakistancargo.net/index.php">
                  <img style={{ cursor: "pointer", height: "70px", width: "auto" }} src="./cargo.png" />
                </a>
              </SplideSlide>
            </Splide>
          </div>
        </Container>
      </div>
      
    </>
  );
}

export default Clients;

import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import Fade from "react-reveal";
import animatedScrollTo from "animated-scroll-to";
import WinnerImg from "../media/cardImg.jpg";
import "../css/home.css";

const marginUp = {
  marginTop: "5%",
};

const cardImage = <img src={WinnerImg} width={300} alt="" />;

export default function Home() {
  useEffect(() => {
    console.log("landed");
    return () => {
      animatedScrollTo(0);
    };
  });

  return (
    <div className="home-wrapper">
      <Container>
        <Row>
          <Col lg={12}>
            <Fade>
              <h1>Hello! and Welcome to Crafted Terrains!</h1>
            </Fade>
          </Col>
          <Col style={marginUp} lg={4}>
            <BrowserView>
              <Fade left>
                <Card>
                  <Card.Header>This week's Peasant Crafts Winner!</Card.Header>
                  <Card.Body>{cardImage}</Card.Body>
                  <Card.Title>Winner Details</Card.Title>
                  <Card.Footer>
                    <Button block variant="outline-dark">
                      View Winner's profile
                    </Button>
                  </Card.Footer>
                </Card>
              </Fade>
            </BrowserView>
          </Col>
          <Col style={marginUp} lg={8}>
            <Fade right>
              <br />
              <br />
              <h5>
                Congratulations to this weeks winner for winning the peasant
                level crafts!
              </h5>
              <h5>
                To find out how you can enter, Join our{" "}
                <a href="#discordLink">Dicord Server</a> and become a winner!!{" "}
              </h5>
            </Fade>
          </Col>
          <Col style={marginUp} lg={4}>
            <MobileView>
              <Fade left>
                <Card>
                  <Card.Header>This week's Peasant Crafts Winner!</Card.Header>
                  <Card.Body>{cardImage}</Card.Body>
                  <Card.Title>Winner Details</Card.Title>
                  <Card.Footer>
                    <Button block variant="outline-dark">
                      View Winner's profile
                    </Button>
                  </Card.Footer>
                </Card>
              </Fade>
            </MobileView>
          </Col>
          <Col style={marginUp} lg={12}>
            <Dropdown.Divider />
          </Col>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

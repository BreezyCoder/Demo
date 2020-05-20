import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Container, Row, Col } from "react-bootstrap";
import "../css/about.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="about-wrapper">
        <Container>
          <Row>
            <Col lg={12}>
              <BrowserView>
                <h4>This site was created by Brendan Nel using ReactJS</h4>
                <h4>
                  This site is optimized for mobile use using CSS media queries
                  as well as using React-Device-Detect
                </h4>
              </BrowserView>
              <MobileView>
                <h4>This site was created by Brendan Nel using ReactJS</h4>
              </MobileView>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

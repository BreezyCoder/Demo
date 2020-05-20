import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Slide } from "react-reveal";
import { IconContext } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import "../css/footer.css";
// styles injection for personalization on footer component
const styles = {
  colors: {
    color: "lightgrey",
  },
  marginUp: {
    marginTop: "5%",
  },
};

//using a functional component for easy and simple state managment
export default function Footer() {
  const [state, setState] = React.useState({
    show: false,
  });

  const handleClick = () => {
    setState({
      show: !state.show,
    });
  };

  const hiddenText = state.show;

  return (
    <Slide up>
      <div className="footer">
        <Container>
          <Row>
            {/*used a root object for styling as concatenation is easier to use*/}
            <Col style={styles.marginUp} lg={12}>
              <h1 style={styles.colors}>Footer</h1>
              <Button onClick={handleClick} variant="outline-light">
                {hiddenText ? "Hide Text" : "Show Text"}
              </Button>
            </Col>
            <Col style={styles.marginUp} lg={8}>
              <Slide left>
                {hiddenText ? (
                  <h4 show={state.show} style={styles.colors}>
                    This text is either hidden/shown using conditional rendering
                  </h4>
                ) : (
                  ""
                )}
              </Slide>
            </Col>
          </Row>
          <IconContext.Provider value={{ color: "green", size: "3rem" }}>
            <AiFillGithub
              className="github-icon"
              style={{ right: "5%" }}
              onClick={() => {
                window.open("https://github.com/");
              }}
            />
          </IconContext.Provider>
        </Container>
      </div>
    </Slide>
  );
}

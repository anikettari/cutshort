import { Button, message, Steps } from "antd";
import React, { useState, useEffect } from "react";
import BasicInfo from "./Pages/BasicInfo";
import WorkspaceInfo from "./Pages/WorkspaceInfo";
import WorkspaceUse from "./Pages/WorkspaceUse";
import CongratulationsPage from "./Pages/CongratulationsPage";
import logoNew from "../Components/Images/logoNew.png";
import { Col, Row } from "antd";
import { Typography } from "antd";
const { Step } = Steps;
const { Title } = Typography;
const steps = [
  {
    title: "",
    content: <BasicInfo />,
  },
  {
    title: "",
    content: <WorkspaceInfo />,
  },
  {
    title: "",
    content: <WorkspaceUse />,
  },
  {
    title: "",
    content: <CongratulationsPage />,
  },
];

const OnboardingPage = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(0);
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <div>
      <Row
        justify="space-around"
        align="middle"
        className=" simple_border margin_top"
      >
        <Col className="simple_border">
          <img src={logoNew} className="myImage simple_border"></img>
          <h1
            className="simple_border title_bold margin_right"
            style={{ float: "right" }}
          >
            Eden
          </h1>
        </Col>
      </Row>
      {windowSize.innerWidth > 580 ? (
        <Row
          justify="space-around"
          align="middle"
          className="margin_top simple_border"
        >
          <Col xs={22} sm={14} md={8} lg={6} xl={6} className="simple_border">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </Col>
        </Row>
      ) : (
        <></>
      )}
      <Row
        justify="space-around"
        align="middle"
        className="simple_border margin_top"
      >
        <Col xs={22} sm={22} md={22} lg={12} xl={10}>
          <div className="steps-content">{steps[current].content}</div>

          <Row
            justify="space-around"
            align="middle"
            className="simple_border margin_left"
          >
            <Col xs={22} sm={16} md={10} lg={14} xl={16}>
              {current < steps.length - 1 && (
                <Button
                  onClick={() => next()}
                  style={{ width: "100%" }}
                  className="btn_color"
                >
                  Create Workspace
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  style={{ width: "100%" }}
                  className="btn_color"
                  onClick={() => prev()}
                >
                  Launch Eden
                </Button>
              )}
            </Col>
          </Row>
        </Col>
      </Row>{" "}
    </div>
  );
};

export default OnboardingPage;

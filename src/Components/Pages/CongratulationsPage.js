import React from "react";
import { Col, Row } from "antd";
import FormTitle from "../CommonComponents/FormTitle";

import { BsFillCheckCircleFill } from "react-icons/bs";

const CongratulationsPage = () => {
  return (
    <div>
      {" "}
      <Row justify="space-around" align="middle">
        <Col>
          <BsFillCheckCircleFill
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "100px",
              color: "#654de4",
            }}
          />
        </Col>
      </Row>
      <FormTitle
        title={"Congratulations, Eren"}
        subtitle={" You have completed onboarding,you can start using Eden!"}
      />
    </div>
  );
};

export default CongratulationsPage;

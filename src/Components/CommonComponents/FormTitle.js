import React from "react";
import { Col, Row } from "antd";

const FormTitle = (props) => {
  return (
    <div>
      {" "}
      <Row>
        <Col span={24} className="simple_border">
          <h1 className="text_middle title_bold">{props.title}</h1>
          <p className="text_middle text_color desc_text no_margin">
            {props.subtitle}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default FormTitle;

import React, { useState } from "react";
import { Col, Row, Space } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";

const WorkSpaceCards = (props) => {
  return (
    <>
      <Col
        xl={{ span: 10, offset: 1 }}
        xs={{ span: 22, offset: 1 }}
        className={`card_bottom_margin    ${
          props.isActive ? "border_active " : "border_not_active"
        }`}
        onClick={props.activeFn}
      >
        <Row>
          <TeamOutlined
            className={props.isActive ? "icon_active" : "icon_not_active"}
          />
        </Row>
        <Row>
          <h3 className="card_text">{props.title}</h3>
        </Row>
        <Row>
          <p className="text_color">{props.subtitle}</p>
        </Row>
      </Col>
    </>
  );
};

export default WorkSpaceCards;

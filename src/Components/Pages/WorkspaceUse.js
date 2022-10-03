import React, { useState } from "react";
import { Col, Row } from "antd";
import { UserOutlined, TeamOutlined } from "@ant-design/icons";
import FormTitle from "../CommonComponents/FormTitle";

import WorkSpaceCards from "../CommonComponents/WorkSpaceCards";

const WorkspaceUse = () => {
  const [isActive, setIsActive] = useState(false);

  const activeFn = () => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      {" "}
      <FormTitle
        title={"How are you planning to use Eden?"}
        subtitle={"we'll streamline your setup experience accordingly"}
      />
      <Row justify="space-around" align="middle">
        <Col
          xl={{ span: 18, offset: 1 }}
          lg={{ span: 14, offset: 1 }}
          xs={{ span: 20, offset: 1 }}
          md={{ span: 12, offset: 1 }}
          sm={{ span: 20, offset: 1 }}
          className="simple_border card_bottom_margin"
        >
          <Row>
            <WorkSpaceCards
              activeFn={activeFn}
              title={"For Myself"}
              subtitle={"Write better.Think more clearly .Stay organised"}
              isActive={!isActive}
            />

            <WorkSpaceCards
              activeFn={activeFn}
              title={"With my team"}
              subtitle={"Wikis,docs,tasks & projects,all in one place"}
              isActive={isActive}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default WorkspaceUse;

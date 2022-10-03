import React from "react";
import { Col, Row } from "antd";
import { Form, Input, Select } from "antd";
import FormTitle from "../CommonComponents/FormTitle";

const WorkspaceInfo = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <div>www.eden.com</div>
    </Form.Item>
  );
  return (
    <div>
      {" "}
      <FormTitle
        title={"Lets setup a home for all your work"}
        subtitle={" You can always create another workspace later"}
      />
      <Row justify="space-around" align="middle">
        <Col
          xl={{ span: 15, offset: 1 }}
          lg={{ span: 14, offset: 1 }}
          xs={{ span: 20, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={{ span: 16, offset: 1 }}
          className="simple_border"
        >
          <Form form={form} layout="vertical" className="form_title_text">
            <Form.Item label="Workspace Name">
              <Input placeholder="Eden" />
            </Form.Item>

            <Form.Item>
              <Form.Item label="Workspace URL(optional)">
                <Input
                  addonBefore={prefixSelector}
                  placeholder="Example"
                  className="prefix_width"
                />
              </Form.Item>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default WorkspaceInfo;

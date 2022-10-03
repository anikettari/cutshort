import React from "react";
import { Col, Row } from "antd";
import { Form, Input } from "antd";
import FormTitle from "../CommonComponents/FormTitle";

const BasicInfo = () => {
  const [form] = Form.useForm();

  return (
    <div>
      <FormTitle
        title={"Welcome! First things first..."}
        subtitle={"You can always change them later"}
      />
      <Row justify="space-around" align="middle">
        <Col
          xl={{ span: 15, offset: 1 }}
          lg={{ span: 14, offset: 1 }}
          xs={{ span: 20, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          sm={{ span: 16, offset: 1 }}
        >
          <Form form={form} layout="vertical" className="form_title_text">
            <Form.Item label="Full Name">
              <Input placeholder="Steve Jobs" />
            </Form.Item>
            <Form.Item label="Display Name">
              <Input placeholder="Steve" />
            </Form.Item>
            <Form.Item></Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;

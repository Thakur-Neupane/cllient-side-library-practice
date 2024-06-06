import React, { useState } from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Row, Col, Form, Button } from "react-bootstrap";
import { CustomInput } from "../../custominput/CustomInput";

const SignUp = () => {
  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      required: true,
      placeholder: "Thakur",
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      required: true,
      placeholder: "Neupane",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      required: false,
      placeholder: "1234567890",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "thakur@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "*********",
    },
    {
      label: " Confirm Password",
      name: "confirmPassword",
      type: "password",
      required: true,
      placeholder: "*********",
    },
  ];
  return (
    <div>
      <DefaultLayout>
        <Row>
          <Col>
            <Form
              onSubmit={handleOnSubmit}
              className="shadow-lg border p-5 rounded m-auto mt-4"
              style={{ width: "450px" }}
            >
              <h1>Join our Library Community </h1>
              <hr />
              {inputs.map((input, i) => (
                <CustomInput key={i} {...input} onChange={handleOnChange} />
              ))}
              <div>
                <Button className="d-grid">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </DefaultLayout>
    </div>
  );
};

export default SignUp;

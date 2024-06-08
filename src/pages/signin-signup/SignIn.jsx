import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../custominput/CustomInput";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Row, Col, Form, Button } from "react-bootstrap";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if (!email || !password) {
      return toast.error("Both field must be filled for SignIn");
    }
    const result = await loginUser({ email, password });
    console.log(result);
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "thakur@gmail.com",
      inputref: emailRef,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "**********",
      inputref: passRef,
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
              <h1>Welcome Back!</h1>
              <hr />
              {inputs.map((input, i) => (
                <CustomInput key={i} {...input} />
              ))}
              <div className="d-grid">
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </DefaultLayout>
    </div>
  );
};
export default SignIn;

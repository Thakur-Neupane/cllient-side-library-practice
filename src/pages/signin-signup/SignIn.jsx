import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomInput } from "../../custominput/CustomInput";

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
  };
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      required: true,
      placeholder: "thakur@gmail.com",
      inputRef: emailRef,
    },

    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      placeholder: "thakur@gmail.com",
      inputRef: passRef,
    },
  ];
  console.log("It's not rendering");
  return (
    <div>
      <DefaultLayout>
        <Row>
          <Col>
            <Form
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

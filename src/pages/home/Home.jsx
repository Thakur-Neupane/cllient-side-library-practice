import React from "react";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { CustomCarouse } from "../../components/customCarouse/CustomCarouse";
import { Container, Row, Col, Form } from "react-bootstrap";
import { CustomCard } from "../../components/customCard/CustomCard";

const Home = () => {
  return (
    <div>
      <DefaultLayout>
        <CustomCarouse />

        <Container>
          <Row>
            <Col className="d-flex justify-content-between mt-5">
              <label>20 Books Found </label>
              <div>
                <Form.Control placeholder="Search By Book Name...." />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <CustomCard />
            </Col>
          </Row>
        </Container>
      </DefaultLayout>
    </div>
  );
};

export default Home;

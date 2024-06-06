import React from "react";
import Carousel from "react-bootstrap/Carousel";
import a from "../../assets/a.jpg";
import b from "../../assets/b.jpg";
import c from "../../assets/c.jpg";
export const CustomCarouse = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={a} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={b} text="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={c} text="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

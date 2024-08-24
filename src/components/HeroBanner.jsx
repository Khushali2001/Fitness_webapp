import React from "react";
import styled from "styled-components";
import hero_img from "../assets/hero_img.jpg";

const HeroBanner = () => {
  return (
    <Container>
      <img src={hero_img} alt="hero_img" />
      <div className="hero-content">
        <h1>Sweat, Smile And Repeat</h1>
        <p>Get started with your fitness journey</p>
        <button>Explore Exercice</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 45.6vmax;
    object-fit: cover;
  }
  .hero-content {
    position: absolute;
    top: 0;
    padding-left: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-content button {
    width: fit-content;
    background-color: #6f6de8;
    padding: 12px 28px;
    color: #fff;
    font-weight: 100;
    border: none;
    font-size: 18px;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background-color: #2e2c7b; // Remove the quotes around the color
    }
  }
  .hero-content h1 {
    text-align: center;
    font-size: 60px;
    color: #fff;
  }
  .hero-content p {
    font-size: 24px;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 1600px) {
    .hero-content {
      padding-left: 50px;
    }
    .hero-content h1 {
      max-width: 400px;
      font-size: 50px;
    }
    .hero-content p {
      font-size: 22px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      height: 75vmax;
    }

    .hero-content h1 {
      max-width: 250px;
      font-size: 30px;
    }
    .hero-content p {
      font-size: 20px;
      max-width: 250px;
    }

    .hero-content button {
      font-size: 14px;
    }
  }
`;

export default HeroBanner;

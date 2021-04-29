import React from "react";
import styled from "styled-components";

import arrow from "../assets/desktop/icon-arrow-up.svg";

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 1.75rem;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 9.375rem;
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;

  &:hover img {
    opacity: 0.5;
  }
`;

const ButtonText = styled.p`
  font-size: 1rem;
  opacity: 0.5;
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  letter-spacing: 0.3125rem;
  line-height: 1.75rem;

  margin-right: 0.5rem;
`;

const Arrow = styled.img`
  transition: transform 0.3s ease-out;
`;

const MoreButton = ({ handleMoreClick, isMore }) => {
  return (
    <Container onClick={() => handleMoreClick()}>
      <ButtonText>{isMore ? "Less" : "More"}</ButtonText>
      <Arrow
        src={arrow}
        alt="up arrow"
        style={isMore ? { transform: "rotate(180deg)" } : {}}
      />
    </Container>
  );
};

export default MoreButton;

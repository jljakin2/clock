import React, { useEffect } from "react";
import styled from "styled-components";

import sun from "../assets/desktop/icon-sun.svg";
import moon from "../assets/desktop/icon-moon.svg";

const Container = styled.h2`
  display: flex;
`;

const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;

  margin-right: 1rem;
`;

const StyledGreeting = styled.div`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.25rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const handleGreeting = hour => {
  const hourNum = +hour.split(":")[0];

  if (hourNum < 5) {
    return ["Good evening", moon];
  } else if (hourNum >= 5 && hourNum < 12) {
    return ["Good morning", sun];
  } else if (hourNum >= 12 && hourNum < 18) {
    return ["Good afternoon", sun];
  } else {
    return ["Good evening", moon];
  }
};

const Greeting = ({ time }) => {
  useEffect(() => {
    handleGreeting(time);
  }, [time]);

  return (
    <Container>
      <Icon src={handleGreeting(time)[1]} />
      <StyledGreeting>{handleGreeting(time)[0]}, it's currently</StyledGreeting>
    </Container>
  );
};

export default Greeting;

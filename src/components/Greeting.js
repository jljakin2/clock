import React, { useEffect } from "react";
import styled from "styled-components";

// Image import
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

  @media only screen and (max-width: 56.25em) {
    // 900px
    font-size: 1.125rem;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 0.9375rem;
  }
`;

const Currently = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: 0.25rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};

  @media only screen and (max-width: 56.25em) {
    // 900px
    font-size: 1.125rem;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    display: none;
  }
`;

const handleGreeting = hour => {
  /**
   * We need to know what the value for the hour is only.
   * Then we can take that value and run it through conditionals to determine if our app
   * should tell the user "Good morning", "Good afternoon", or "Good evening".
   * We also use that information to render either the sun or the moon icon next to the greeting.
   */
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
  /**
   * Run the handleGreeting function when the component mounts and when it is updated
   */
  useEffect(() => {
    handleGreeting(time);
  }, [time]);

  return (
    <Container>
      {time ? <Icon src={handleGreeting(time)[1]} /> : ""}
      <StyledGreeting>
        {time ? handleGreeting(time)[0] : ""}
        {time ? <Currently>, it's currently</Currently> : ""}
      </StyledGreeting>
    </Container>
  );
};

export default Greeting;

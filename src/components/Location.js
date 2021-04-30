import React from "react";
import styled from "styled-components";

const StyledLocation = styled.h3`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};

  @media only screen and (max-width: 56.25em) {
    font-size: 1.125rem;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 0.9375rem;
  }
`;

const Location = ({ location }) => {
  return <StyledLocation>in {location}</StyledLocation>;
};

export default Location;

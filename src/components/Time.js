import React from "react";
import styled from "styled-components";

const StyledTime = styled.h1`
  font-size: 12.5rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.3125rem;
  line-height: 12.5rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  display: flex;
  align-items: flex-end;
`;

const TimeLabel = styled.span`
  font-size: 2.5rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  transform: translateY(-2rem);

  margin-left: 1rem;
`;

const Time = ({ time, abbr }) => {
  return (
    <StyledTime>
      {time}
      <TimeLabel>{abbr}</TimeLabel>
    </StyledTime>
  );
};

export default Time;

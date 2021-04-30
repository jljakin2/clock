import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const StyledTime = styled.h1`
  font-size: 12.5rem;
  color: ${props => props.theme.colors.white};
  letter-spacing: -0.3125rem;
  line-height: 12.5rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  display: flex;
  align-items: flex-end;

  @media only screen and (max-width: 56.25em) {
    // 900px
    font-size: 10.9375rem;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 6.25rem;
    line-height: 6.25rem;
  }
`;

const TimeLabel = styled.span`
  font-size: 2.5rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  transform: translateY(-2rem);

  margin-left: 1rem;

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 0.9375rem;
    transform: translateY(0);
  }
`;

const Time = ({ time, abbr }) => {
  const getContent = () => {
    /**
     * Function that returns a loading signal to the user if the api hasn't returned any data yet
     */
    if (!time) {
      return (
        <Loader
          type="TailSpin"
          color="#fff"
          height="30"
          width="30"
          style={{ marginRight: "2rem" }}
        />
      );
    } else {
      return time;
    }
  };

  return (
    <StyledTime>
      {getContent()}
      <TimeLabel>{abbr}</TimeLabel>
    </StyledTime>
  );
};

export default Time;

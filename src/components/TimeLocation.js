import React from "react";
import styled from "styled-components";

import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";
import MoreButton from "./MoreButton";

const Container = styled.div`
  display: flex;
  align-items: flex-end;

  transition: transform 0.3s ease-out;

  z-index: 10;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: auto;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const TimeLocation = ({ time, abbr, location, handleMoreClick, isMore }) => {
  return (
    <Container style={isMore ? { transform: "translateY(-40vh)" } : {}}>
      <TimeContainer>
        <Greeting time={time} />
        <Time time={time} abbr={abbr} />
        <Location location={location} />
      </TimeContainer>
      <MoreButton handleMoreClick={handleMoreClick} isMore={isMore} />
    </Container>
  );
};

export default TimeLocation;

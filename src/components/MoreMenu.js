import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const ParentContainer = styled.div`
  color: ${props =>
    props.isNighttime
      ? props => props.theme.colors.white
      : props => props.theme.colors.black};
  background: ${props =>
    props.isNighttime
      ? "rgba(0, 0, 0, 0.5)"
      : props => props.theme.colors.white};

  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50vh;
  padding: 4rem 4rem 4rem 10.3125rem;

  transition: transform 0.3s ease-out;

  z-index: 10;

  @media only screen and (max-width: 56.25em) {
    height: 40vh;
    padding: 7.5rem 4rem;
  }

  @media only screen and (max-width: 43.75em) {
    padding: 3rem 1.625rem;
    flex-direction: column;
  }
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.almostBlack};
    margin-right: 5.875rem;

    @media only screen and (max-width: 56.25em) {
      border: none;
    }

    @media only screen and (max-width: 43.75em) {
      margin: 0 0 1.5rem 0;
    }
  }
`;

const MoreMenu = ({
  timezone,
  dayOfWeek,
  weekNum,
  dayOfYear,
  isMore,
  isNighttime,
}) => {
  const containerStyles = {
    transform: isMore ? "translateY(0)" : "translateY(100%)",
  };

  return (
    <ParentContainer style={containerStyles}>
      <ChildContainer>
        <MenuItem title={"Current Timezone"} content={timezone} />
        <MenuItem title={"Day of the Year"} content={dayOfYear} />
      </ChildContainer>
      <ChildContainer>
        <MenuItem title={"Day of the Week"} content={dayOfWeek} />
        <MenuItem title={"Week Number"} content={weekNum} />
      </ChildContainer>
    </ParentContainer>
  );
};

export default MoreMenu;

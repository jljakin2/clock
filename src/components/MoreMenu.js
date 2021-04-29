import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const ParentContainer = styled.div`
  color: ${props => props.theme.colors.almostBlack};
  background: ${props => props.theme.colors.white};

  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 50vh;
  padding: 4rem 4rem 4rem 10.3125rem;

  transition: transform 0.3s ease-out;

  z-index: 10;
`;

const ChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.almostBlack};
    margin-right: 5.875rem;
  }
`;

const MoreMenu = ({ timezone, dayOfWeek, weekNum, dayOfYear, isMore }) => {
  return (
    <ParentContainer
      style={
        isMore
          ? { transform: "translateY(0)" }
          : { transform: "translateY(100%)" }
      }>
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

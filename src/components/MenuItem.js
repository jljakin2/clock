import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.1875rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const StyledContent = styled.h1`
  font-size: 3.5rem;
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const MenuItem = ({ title, content }) => {
  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
    </Container>
  );
};

export default MenuItem;

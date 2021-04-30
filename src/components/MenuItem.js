import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 43.75em) {
    // 700px
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledTitle = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.1875rem;
  line-height: 1.75rem;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeights.regular};

  @media only screen and (max-width: 56.25em) {
    // 900px
    font-size: 0.8125rem;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 0.625rem;
    line-height: 1rem;
  }
`;

const StyledContent = styled.h1`
  font-size: 3.5rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  @media only screen and (max-width: 56.25em) {
    // 900px
    font-size: 40px;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 1.25rem;
  }
`;

const MenuItem = ({ title, content }) => {
  const getContent = () => {
    /**
     * Function that returns a loading signal to the user if the api hasn't returned any data yet
     */
    if (!content) {
      return (
        <Loader
          type="TailSpin"
          color="#000"
          height="30"
          width="30"
          style={{ marginRight: "2rem" }}
        />
      );
    } else {
      return <StyledContent>{content}</StyledContent>;
    }
  };

  return (
    <Container>
      <StyledTitle>{title}</StyledTitle>
      {getContent()}
    </Container>
  );
};

export default MenuItem;

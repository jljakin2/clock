import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import refresh from "../assets/desktop/icon-refresh.svg";

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  transition: transform 0.3s ease-out;

  z-index: 10;

  @media only screen and (max-width: 43.75em) {
    // 700px
    margin-bottom: auto;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1rem;
  max-width: 33.75rem;

  @media only screen and (max-width: 43.75em) {
    // 700px
    max-width: 100%;
  }
`;

const QuoteText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  &:not(:last-child) {
    margin-bottom: 0.8125rem;
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    font-size: 0.75rem;
    line-height: 1.375rem;
  }
`;

const Refresh = styled.img`
  cursor: pointer;

  margin-top: 0.3rem;
  width: 1rem;
  height: 1rem;
`;

const Quote = ({ quote, author, onQuoteRefresh, isMore }) => {
  const getContent = () => {
    if (!quote) {
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
      return (
        <QuoteContainer>
          <QuoteText>"{quote}"</QuoteText>
          <QuoteText>{author}</QuoteText>
        </QuoteContainer>
      );
    }
  };

  return (
    // we need to move this out of the way if the more button is pressed
    <Container style={isMore ? { transform: "translateY(-50vh)" } : {}}>
      {getContent()}
      <Refresh src={refresh} onClick={() => onQuoteRefresh()}></Refresh>
    </Container>
  );
};

export default Quote;

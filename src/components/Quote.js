import React from "react";
import styled from "styled-components";

import refresh from "../assets/desktop/icon-refresh.svg";

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  transition: transform 0.3s ease-out;

  z-index: 10;
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1rem;
  max-width: 33.75rem;
`;

const QuoteText = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: ${props => props.theme.fontWeights.regular};

  &:not(:last-child) {
    margin-bottom: 0.8125rem;
  }
`;

const Refresh = styled.img`
  cursor: pointer;

  margin-top: 0.3rem;
  width: 1rem;
  height: 1rem;
`;

const Quote = ({ quote, author, onQuoteRefresh, isMore }) => {
  return (
    <Container style={isMore ? { transform: "translateY(-50vh)" } : {}}>
      <QuoteContainer>
        <QuoteText>"{quote}"</QuoteText>
        <QuoteText>{author}</QuoteText>
      </QuoteContainer>
      <Refresh src={refresh} onClick={() => onQuoteRefresh()}></Refresh>
    </Container>
  );
};

export default Quote;
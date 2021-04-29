import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Quote from "./components/Quote";
import TimeLocation from "./components/TimeLocation";
import MoreMenu from "./components/MoreMenu";

import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

import daytime from "./assets/desktop/bg-image-daytime.jpg";
import nighttime from "./assets/desktop/bg-image-nighttime.jpg";

const Main = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 3.5rem 9.6875rem 6.125rem 9.6875rem;
  /* border: 1px solid red; */

  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);

    width: 100%;
    height: 100%;

    z-index: 2;
  }
`;

const App = () => {
  const [time, setTime] = useState("");
  const [abbr, setAbbr] = useState("");
  const [ip, setIp] = useState("");
  const [timezone, setTimezone] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [weekNum, setWeekNum] = useState("");
  const [dayOfYear, setDayOfYear] = useState("");
  const [location, setLocation] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isNighttime, setIsNighttime] = useState(false);
  const [isMore, setIsMore] = useState(false);

  const handleTimeApi = async () => {
    const response = await axios.get("http://worldtimeapi.org/api/ip");
    const dateTimeArray = response.data.datetime.split("T");
    const timeArray = dateTimeArray[1].split(":");
    const currentTime = `${timeArray[0]}:${timeArray[1]}`;

    const abbreviation = response.data.abbreviation;
    const ipAddress = response.data.client_ip;
    const timezone = response.data.timezone;
    const dayOfWeek = response.data.day_of_week;
    const weekNum = response.data.week_number;
    const dayOfYear = response.data.day_of_year;

    if (timeArray[0] < 7 || timeArray >= 18) {
      setIsNighttime(true);
    }

    setTime(currentTime);
    setAbbr(abbreviation);
    setIp(ipAddress);
    setTimezone(timezone);
    setDayOfWeek(dayOfWeek);
    setWeekNum(weekNum);
    setDayOfYear(dayOfYear);
  };

  const handleLocationApi = async () => {
    const response = await axios.get(`https://freegeoip.app/json/${ip}`);
    const city = response.data.city;
    const state = response.data.region_code;

    const cityState = `${city}, ${state}`;

    setLocation(cityState);
  };

  const handleQuoteApi = async () => {
    const response = await axios.get("https://api.quotable.io/random");
    const quote = response.data.content;
    const author = response.data.author;

    setQuote(quote);
    setAuthor(author);
  };

  const handleMoreClick = () => {
    setIsMore(!isMore);
    console.log(isMore);
  };

  useEffect(() => {
    handleTimeApi();
    handleLocationApi();
    handleQuoteApi();
  }, []);

  const renderBgImage = () => {
    return isNighttime ? `url(${nighttime})` : `url(${daytime})`;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main style={{ background: renderBgImage() }}>
        <Quote
          quote={quote}
          author={author}
          onQuoteRefresh={handleQuoteApi}
          isMore={isMore}
        />
        <TimeLocation
          time={time}
          abbr={abbr}
          location={location}
          handleMoreClick={handleMoreClick}
          isMore={isMore}
        />
      </Main>
      <MoreMenu
        timezone={timezone}
        dayOfWeek={dayOfWeek}
        weekNum={weekNum}
        dayOfYear={dayOfYear}
        isMore={isMore}
      />
    </ThemeProvider>
  );
};

export default App;

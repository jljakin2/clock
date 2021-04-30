import axios from "axios";
import Loader from "react-loader-spinner";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Quote from "./components/Quote";
import TimeLocation from "./components/TimeLocation";
import MoreMenu from "./components/MoreMenu";

// Styling imports
import GlobalStyle from "./theme/GlobalStyle";
import theme from "./theme/theme";

// ==== IMAGES =====
// desktop images
import daytime from "./assets/desktop/bg-image-daytime.jpg";
import nighttime from "./assets/desktop/bg-image-nighttime.jpg";

// tablet images
import daytimeTab from "./assets/tablet/bg-image-daytime.jpg";
import nighttimeTab from "./assets/tablet/bg-image-nighttime.jpg";

// mobile images
import daytimeMobile from "./assets/mobile/bg-image-daytime.jpg";
import nighttimeMobile from "./assets/mobile/bg-image-nighttime.jpg";
// ==========

const Main = styled.div`
  // background image changes depending on the state of "isNighttime" which keeps track of whether the time reflects daytime or nighttime
  background-image: ${props =>
    props.isNighttime ? `url(${nighttime})` : `url(${daytime})`};
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 3.5rem 9.6875rem 6.125rem 9.6875rem;

  z-index: 1;

  @media only screen and (max-width: 75em) {
    // 1200px
    padding: 5rem 4rem 4rem 4rem;
    background-image: ${props =>
      props.isNighttime ? `url(${nighttimeTab})` : `url(${daytimeTab})`};
  }

  @media only screen and (max-width: 43.75em) {
    // 700px
    padding: 2.5rem 1.5625rem;
    justify-content: flex-start;
    background-image: ${props =>
      props.isNighttime ? `url(${nighttimeMobile})` : `url(${daytimeMobile})`};
  }

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
  // ===== STATE =====
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
    /**
     * Function that calls API to get time information
     * Function uses API information to update app states
     */

    const response = await axios.get("https://worldtimeapi.org/api/ip");

    // The response data contains the time information in a long date time string so we need to clean it up to get just the time.
    const dateTimeArray = response.data.datetime.split("T");
    const timeArray = dateTimeArray[1].split(":");
    const currentTime = `${timeArray[0]}:${timeArray[1]}`;

    // Grabbing the rest of the data needed for the remainder of our app
    const abbreviation = response.data.abbreviation;
    const ipAddress = response.data.client_ip; // necessary as input for location API call
    const timezone = response.data.timezone;
    const dayOfWeek = response.data.day_of_week;
    const weekNum = response.data.week_number;
    const dayOfYear = response.data.day_of_year;

    // Check time of day because app will render specific things based on if the time of day is nighttime or daytime
    if (timeArray[0] < 7 || timeArray[0] >= 18) {
      setIsNighttime(true);
    }

    // Update states based on information from API
    setTime(currentTime);
    setAbbr(abbreviation);
    setIp(ipAddress);
    setTimezone(timezone);
    setDayOfWeek(dayOfWeek);
    setWeekNum(weekNum);
    setDayOfYear(dayOfYear);
  };

  const handleLocationApi = async () => {
    /**
     * Function that calls location api in order to get the city name of the user
     */
    const response = await axios.get(`https://freegeoip.app/json/${ip}`);
    const city = response.data.city;
    const state = response.data.region_code;

    const cityState = `${city}, ${state}`;

    setLocation(cityState);
  };

  const handleQuoteApi = async () => {
    /**
     * Function that calls quote api and updates state with response data. Api call is set to random, however, there are other options
     * if changes are needed.
     */
    const response = await axios.get("https://api.quotable.io/random");
    const quote = response.data.content;
    const author = response.data.author;

    setQuote(quote);
    setAuthor(author);
  };

  const handleMoreClick = () => {
    /**
     * Function that changes state if the isMore button has been clicked
     */
    setIsMore(!isMore);
  };

  useEffect(() => {
    /**
     * Call time, location, and quote apis when the component is mounted
     */
    handleTimeApi();
    handleLocationApi();
    handleQuoteApi();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
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
        isNighttime={isNighttime}
        isMore={isMore}
      />
    </ThemeProvider>
  );
};

export default App;

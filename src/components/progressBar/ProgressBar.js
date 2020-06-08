import React from "react";
import { Timeline, CurrentTimeline, Dot, Time } from "./ProgressBar.styles";
import { Flex, Margin } from "./../helpers/helpers";

const ProgressBar = () => {
  return (
    <Flex alignItems="center">
      <Time>1:47</Time>
      <Margin mr="15px" />
      <Timeline>
        <CurrentTimeline />
        <Dot />
      </Timeline>
      <Margin ml="15px" />
      <Time>4:21</Time>
    </Flex>
  );
};

export default ProgressBar;

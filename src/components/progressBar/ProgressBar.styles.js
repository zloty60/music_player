import styled from "styled-components";

export const Timeline = styled.div`
  width: 100%;
  background-color: #00c9b7;
  height: 2px;
  position: relative;
`;

export const CurrentTimeline = styled.div`
  width: 60%;
  background-color: #00c9b7;
  height: 6px;
  position: absolute;
  top: -2px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Dot = styled.div`
  background-color: #00c9b7;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: -2px;
`;

export const Time = styled.p`
  color: #6f729c;
  font-size: 14px;
  font-weight: lighter;
`;

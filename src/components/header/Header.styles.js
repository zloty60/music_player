import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #1f1937;
`;

export const MainText = styled.h3`
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin: 0;
  text-align: left;
  margin-top: 6px;
  font-weight: lighter;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export const SecondaryText = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  color: #6f729c;
  margin: 0;
  text-align: left;
  font-weight: lighter;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`;

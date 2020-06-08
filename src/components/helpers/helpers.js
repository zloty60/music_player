import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Flex = styled.div`
  display: flex;

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `};

  ${({ flexdirection }) =>
    flexdirection &&
    css`
      flex-direction: ${flexdirection};
    `};
`;

export const Margin = styled.div`
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `};
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `};
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `};
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `};
`;

export const ClearButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

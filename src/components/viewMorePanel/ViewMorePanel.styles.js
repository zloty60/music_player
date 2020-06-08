import styled from "styled-components";

export const ViewMorePanelWrapper = styled.div`
  background-color: rgba(31, 25, 55, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

export const ViewMoreHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 26px;
  padding-bottom: 26px;
  z-index: 2;
`;

export const Img = styled.img`
  height: 170px;
  @media (min-width: 500px) {
    height: 210px;
  }
`;

export const ViewMoreOption = styled.li`
  color: #ffffff;
  font-size: 18px;
  list-style: none;
  text-align: center;
  margin-bottom: 20px;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

export const Ul = styled.ul`
  padding-left: 0;
`;

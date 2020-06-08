import styled from "styled-components";

export const PlaylistPanelWrapper = styled.div`
  background-color: #ffffff;
  position: fixed;
  top: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding-top: 25px;
  overflow-y: auto;
  padding-bottom: 120px;
`;

export const PlayListPanelBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 25px;
  text-align: center;
  height: 120px;
  padding-top: 25px;
  background-color: #ffffff;
`;

export const Counter = styled.span`
  color: #6f729c;
  font-weight: lighter;
`;

export const Li = styled.li`
  list-style: none;
`;

export const Ul = styled.ul`
  padding-left: 0;
`;

export const SongName = styled.p`
  font-size: 18px;
  color: #1b1b1b;
  text-transform: capitalize;
  font-weight: lighter;
`;

export const SongLength = styled.p`
  font-size: 18px;
  color: #6f729c;
  font-weight: lighter;
`;

export const Button = styled.button`
  display: block;
  background-color: #755dd5;
  width: 100%;
  max-width: 400px;
  border: none;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
`;

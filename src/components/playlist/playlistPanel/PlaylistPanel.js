import React from "react";
import { useSelector } from "react-redux";
import { PlaylistPanelWrapper } from "./PlaylistPanel.styles";
import { useDispatch } from "react-redux";
import { closePlaylist } from "./../../../redux/actions/layoutActions";
import { Container, Margin, Flex } from "./../../helpers/helpers";
import {
  Counter,
  Li,
  Ul,
  SongName,
  SongLength,
  PlayListPanelBottom,
  Button,
} from "./PlaylistPanel.styles";
import { ReactComponent as HideIcon } from "./../../../assets/img/hide_ico.svg";

const PlaylistPanel = () => {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.player.playlist);

  return (
    <PlaylistPanelWrapper>
      <Container>
        <Ul>
          {playlist.map((el, i) => (
            <Li key={i}>
              <Flex alignItems="center">
                <Counter>{i + 1}.</Counter>
                <Margin mr="10px" />
                <SongName>{el.songTitle}</SongName>
                <Margin mr="auto" />
                <SongLength>{el.songLength}</SongLength>
              </Flex>
            </Li>
          ))}
        </Ul>
      </Container>
      <PlayListPanelBottom>
        <Container>
          <Flex justifyContent="center">
            <Button>SHUFFLE PLAY</Button>
          </Flex>
          <Margin mb="20px" />
          <HideIcon
            height={17}
            onClick={() => dispatch(closePlaylist())}
            style={{ cursor: "pointer" }}
          />
        </Container>
      </PlayListPanelBottom>
    </PlaylistPanelWrapper>
  );
};

export default PlaylistPanel;

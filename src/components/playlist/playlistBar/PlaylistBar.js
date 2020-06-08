import React from "react";
import { useDispatch } from "react-redux";
import {
  PlaylistBarWrapper,
  SecondaryText,
  MainText,
  Time,
} from "./PlaylisBar.styles";
import { Container, Flex, ClearButton } from "./../../helpers/helpers";
import { ReactComponent as PlayListIcon } from "./../../../assets/img/playlist_ico.svg";
import {
  openPlaylist,
  closeViewMore,
} from "./../../../redux/actions/layoutActions";

const PlaylistBar = () => {
  const dispatch = useDispatch();
  const handleOpenPlaylist = () => {
    // playlistbar widoczny jest w viewMore dlatego jak mam otwarty viewMore zamykam
    dispatch(closeViewMore());
    dispatch(openPlaylist());
  };

  return (
    <PlaylistBarWrapper>
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <ClearButton onClick={handleOpenPlaylist}>
            <PlayListIcon height={17} />
          </ClearButton>
          <div>
            <SecondaryText>Next</SecondaryText>
            <MainText>Livin' In A Movie</MainText>
          </div>
          <Time>3:27</Time>
        </Flex>
      </Container>
    </PlaylistBarWrapper>
  );
};

export default PlaylistBar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { playMusic, stopMusic } from "./../../redux/actions/playerActions";
import { openViewMore } from "./../../redux/actions/layoutActions";
import { HeaderWrapper, MainText, SecondaryText } from "./Header.styles";
import { ReactComponent as BackIcon } from "./../../assets/img/back_ico.svg";
import { ReactComponent as MoreIcon } from "./../../assets/img/more_ico.svg";
import play_active from "./../../assets/img/Play_active.png";
import play_inactive from "./../../assets/img/Play_inactive.png";
import { Container, Flex, Margin, ClearButton } from "./../helpers/helpers";

const Header = () => {
  const dispatch = useDispatch();
  const isPlaylistOpen = useSelector((state) => state.layout.isPlaylistOpen);
  const isPlay = useSelector((state) => state.player.isPlay);
  return (
    <HeaderWrapper>
      <Container>
        {isPlaylistOpen ? (
          <Flex alignItems="center">
            <BackIcon height={17} />
            <Margin mr="40px" />
            <div>
              <MainText>Self Conscious</MainText>
              <SecondaryText>KANYE WEST</SecondaryText>
            </div>
            <Margin mr="auto" />
            {isPlay ? (
              <img
                onClick={() => dispatch(stopMusic())}
                src={play_active}
                alt=""
                height={45}
              />
            ) : (
              <img
                onClick={() => dispatch(playMusic())}
                src={play_inactive}
                alt=""
                height={45}
              />
            )}
          </Flex>
        ) : (
          <Flex justifyContent="space-between" alignItems="center">
            <BackIcon height={17} />
            <div>
              <SecondaryText center>album</SecondaryText>
              <MainText center>unreleased</MainText>
            </div>
            <ClearButton onClick={() => dispatch(openViewMore())}>
              <MoreIcon height={17} />
            </ClearButton>
          </Flex>
        )}
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

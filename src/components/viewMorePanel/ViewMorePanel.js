import React from "react";
import { useDispatch } from "react-redux";
import {
  ViewMorePanelWrapper,
  ViewMoreHeader,
  Img,
  Ul,
  ViewMoreOption,
} from "./ViewMorePanel.styles";
import { Flex, Container, ClearButton, Margin } from "./../helpers/helpers";
import { ReactComponent as BackIcon } from "./../../assets/img/back_ico.svg";
import { ReactComponent as MoreIcon } from "./../../assets/img/more_ico.svg";
import { closeViewMore } from "./../../redux/actions/layoutActions";
import img from "./../../assets/img/unreleased_cover.png";
import SongDetails from "./../songDetails/SongDetails";

const ViewMorePanel = () => {
  const dispatch = useDispatch();
  return (
    <ViewMorePanelWrapper>
      <ViewMoreHeader>
        <Container>
          <Flex justifyContent="space-between" alignItems="center">
            <BackIcon height={17} />
            <ClearButton onClick={() => dispatch(closeViewMore())}>
              <MoreIcon height={17} />
            </ClearButton>
          </Flex>
        </Container>
      </ViewMoreHeader>
      <Flex
        justifyContent="center"
        alignItems="center"
        fullHeight
        flexdirection="column"
      >
        <Img src={img} alt="" />
        <SongDetails />
        <Margin mb="20px" />
        <Ul>
          <ViewMoreOption>Add to playlist</ViewMoreOption>
          <ViewMoreOption>Show album</ViewMoreOption>
          <ViewMoreOption>Share with friends</ViewMoreOption>
        </Ul>
      </Flex>
    </ViewMorePanelWrapper>
  );
};

export default ViewMorePanel;

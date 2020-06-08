import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Container, Flex } from "./../components/helpers/helpers";
import { Main } from "./../components/main/Main.styles";
import Header from "./../components/header/Header";
import SongDetails from "./../components/songDetails/SongDetails";
import PlayerNavigation from "./../components/playerNavigation/PlayerNavigation";
import {
  Cover,
  SlideWrapper,
} from "./../components/coverCarousel/CoverCarousel.styles";
import Playlist from "./Playlist";
import ProgressBar from "./../components/progressBar/ProgressBar";
import ViewMore from "./ViewMore";

class RootView extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      arrows: false,
      centerMode: true,
    };
    return (
      <>
        <Header />
        <Container>
          <Main>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.albumList.map((el, i) => (
                <SlideWrapper key={i}>
                  <Flex justifyContent="center">
                    <Cover src={el.cover} />
                  </Flex>
                </SlideWrapper>
              ))}
            </Slider>
            <SongDetails />
            <PlayerNavigation next={this.next} previous={this.previous} />
            <ProgressBar />
          </Main>
        </Container>
        <ViewMore />
        <Playlist />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    albumList: state.player.albumList,
  };
};

export default connect(mapStateToProps)(RootView);

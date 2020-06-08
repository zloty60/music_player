import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playMusic, stopMusic } from "./../../redux/actions/playerActions";
import play_active from "./../../assets/img/Play_active.png";
import play_inactive from "./../../assets/img/Play_inactive.png";
import { ReactComponent as ShuffleIcon } from "./../../assets/img/shuffle_ico.svg";
import { ReactComponent as NextIcon } from "./../../assets/img/next_ico.svg";
import { ReactComponent as RepeatIcon } from "./../../assets/img/repeat_ico.svg";
import { Flex } from "./../helpers/helpers";
import { PrevIcon } from "./PlayerNavigation.styles";

const PlayerNavigation = ({ next, previous }) => {
  const dispatch = useDispatch();
  const isPlay = useSelector((state) => state.player.isPlay);

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <ShuffleIcon height={17} />
      <PrevIcon height={17} onClick={previous} style={{ cursor: "pointer" }} />
      {isPlay ? (
        <img
          onClick={() => dispatch(stopMusic())}
          src={play_active}
          alt=""
          height={85}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <img
          onClick={() => dispatch(playMusic())}
          src={play_inactive}
          alt=""
          height={85}
          style={{ cursor: "pointer" }}
        />
      )}
      <NextIcon height={17} onClick={next} style={{ cursor: "pointer" }} />
      <RepeatIcon height={17} />
    </Flex>
  );
};

export default PlayerNavigation;

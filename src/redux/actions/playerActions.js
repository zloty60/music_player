import {
  PLAY,
  STOP_PLAY,
} from "./../../utils/constants/playerReducerConstants";

export const playMusic = () => {
  return {
    type: PLAY,
  };
};

export const stopMusic = () => {
  return {
    type: STOP_PLAY,
  };
};

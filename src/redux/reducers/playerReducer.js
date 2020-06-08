import {
  PLAY,
  STOP_PLAY,
} from "./../../utils/constants/playerReducerConstants";

import { playlistData } from "./../../utils/data/playlisData";
import { albumListData } from "./../../utils/data/albumListData";

const initialState = {
  isPlay: false,
  playlist: playlistData,
  albumList: albumListData,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY: {
      return {
        ...state,
        isPlay: true,
      };
    }
    case STOP_PLAY: {
      return {
        ...state,
        isPlay: false,
      };
    }
    default:
      return state;
  }
};

export default playerReducer;

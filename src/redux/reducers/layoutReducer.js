import {
  OPEN_PLAYLIST,
  CLOSE_PLAYLIST,
  OPEN_VIEW_MORE,
  CLOSE_VIEW_MORE,
} from "./../../utils/constants/layoutReducerConstants";

const initialState = {
  isPlaylistOpen: false,
  isViewMoreOpen: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_PLAYLIST: {
      return {
        ...state,
        isPlaylistOpen: true,
      };
    }
    case CLOSE_PLAYLIST: {
      return {
        ...state,
        isPlaylistOpen: false,
      };
    }
    case OPEN_VIEW_MORE: {
      return {
        ...state,
        isViewMoreOpen: true,
      };
    }
    case CLOSE_VIEW_MORE: {
      return {
        ...state,
        isViewMoreOpen: false,
      };
    }

    default:
      return state;
  }
};

export default layoutReducer;

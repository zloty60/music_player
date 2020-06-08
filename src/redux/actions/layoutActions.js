import {
  OPEN_PLAYLIST,
  CLOSE_PLAYLIST,
  OPEN_VIEW_MORE,
  CLOSE_VIEW_MORE,
} from "./../../utils/constants/layoutReducerConstants";

export const openPlaylist = () => {
  return {
    type: OPEN_PLAYLIST,
  };
};

export const closePlaylist = () => {
  return {
    type: CLOSE_PLAYLIST,
  };
};

export const closeViewMore = () => {
  return {
    type: CLOSE_VIEW_MORE,
  };
};

export const openViewMore = () => {
  return {
    type: OPEN_VIEW_MORE,
  };
};

import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PlaylistBar from "./../components/playlist/playlistBar/PlaylistBar";
import PlaylistPanel from "./../components/playlist/playlistPanel/PlaylistPanel";

const Playlist = () => {
  const isPlaylistOpen = useSelector((state) => state.layout.isPlaylistOpen);
  return (
    <>
      {!isPlaylistOpen && <PlaylistBar />}
      <CSSTransition
        in={isPlaylistOpen}
        unmountOnExit
        timeout={300}
        classNames="playlist"
      >
        <PlaylistPanel />
      </CSSTransition>
    </>
  );
};

export default Playlist;

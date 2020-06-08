import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import ViewMorePanel from "./../components/viewMorePanel/ViewMorePanel";

const ViewMore = () => {
  const isViewMoreOpen = useSelector((state) => state.layout.isViewMoreOpen);
  return (
    <CSSTransition
      in={isViewMoreOpen}
      timeout={300}
      unmountOnExit
      classNames="viewMore"
    >
      <ViewMorePanel />
    </CSSTransition>
  );
};

export default ViewMore;

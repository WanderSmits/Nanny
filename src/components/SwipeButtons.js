import React from "react";
import "../css/SwipeButtons.css";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      {" "}
      <IconButton className="swipeButtons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;

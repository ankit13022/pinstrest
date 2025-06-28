import React from "react";
import "./comments.css";
import Image from "../image/Image";
const comment = () => {
  return (
    <div className="comment">
      <Image path="/general/noAvatar.png" alt="" />
      <div className="commentContent">
        <span className="commentUsername">Jhon doe</span>
        <p className="commentText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
          soluta?
        </p>
        <span className="commentTime">1h</span>
      </div>
    </div>
  );
};

export default comment;

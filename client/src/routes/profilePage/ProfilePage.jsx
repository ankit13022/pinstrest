import React, { useState } from "react";
import "./profilePage.css";
import Image from "../../components/image/Image";
import Gallery from "../../components/gallery/Gallery";
import Boards from "../../components/boards/Boards";
const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        path="/general/noAvatar.png"
        alt=""
      />
      <h1 className="profileName">Jhon Doe</h1>
      <span className="profileUsername">@Jhondoe</span>
      <div className="followCounts">10 followers · 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Boards />}
    </div>
  );
};

export default ProfilePage;

import { useState } from "react";
import "./userButton.css";
import Image from "../image/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentuser = true;

  return currentuser ? (
    <div className="userButton">
      <Image path="general/noAvatar.png" alt="" />
      <Image
        onClick={() => setOpen((prev) => !prev)}
        path="general/arrow.svg"
        alt=""
        className="arrow"
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">
            <span>Profile</span>
          </div>
          <div className="userOption">
            <span>Settings</span>
          </div>
          <div className="userOption">
            <span>Logout</span>
          </div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginlink">
      login/signup
    </a>
  );
};

export default UserButton;

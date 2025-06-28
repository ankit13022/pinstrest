import "./boards.css";
import Image from "../image/Image";

const Boards = () => {
  return (
    <div className="collections">
      {/* COLLECTION */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="" />
        <div className="collectionInfo">
          <h1>Minimum</h1>
          <span>12 Pins · 1w</span>
        </div>
      </div>
    </div>
  );
};

export default Boards;

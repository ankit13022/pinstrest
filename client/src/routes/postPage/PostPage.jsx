import PostIntreactions from "../../components/postIntreactions/PostIntreactions";
import "./postPage.css";
import Image from "../../components/image/Image";
import { Link } from "react-router";
import Comments from "../../components/comments/comments";
const PostPage = () => {
  return (
    <div className="postPage">
      <div className="postContainer">
        <div className="postImg">
          <Image path="/pins/pin1.jpeg" alt="" w={736} />
        </div>
        <div className="postDetails">
          <PostIntreactions />
          <Link to="/jhon" className="postUser">
            <Image path="/general/noAvatar.png" alt="user" />
            <span>Jhon Doe</span>
          </Link>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default PostPage;

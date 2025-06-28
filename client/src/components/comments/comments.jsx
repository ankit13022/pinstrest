import "./comments.css";
import Comment from "./comment";
import CommentForm from "./commentForm";
const comments = () => {
  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 Comments</span>
        {/* COMMENT */}
        <Comment />
      </div>
      <CommentForm />
    </div>
  );
};

export default comments;

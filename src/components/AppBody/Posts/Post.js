import { ChatOutlinedIcon, SendIcon, ShareIcon, ThumbUpOffAltIcon } from "../../../icons";
import User from "../../User/User";
import InputOption from "../InputOption/InputOption";
import "./Post.scss";

const Post = ({ name, description, message, photoUrl, timestamp }) => {
  return (
    <div className="post">
      <div className="post__header">
        <User className="post__avatar" name={name} photoUrl={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;

import { useEffect, useState } from "react";
import { CreateIcon, EventIcon, ImageIcon, NewspaperIcon, YouTubeIcon } from "../../../icons";
import InputOption from "../InputOption/InputOption";
import Post from "../Posts/Post";
import { db } from "../../../firebase";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import "./Feed.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../../../state/userSlice";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  const colRef = collection(db, "posts");
  const q = query(colRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [q]);

  const sendPost = (e) => {
    e.preventDefault();

    addDoc(colRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp().fromData(new Date()),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContaineer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#378fe9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#5f9b41" />
          <InputOption Icon={EventIcon} title="Event" color="#c37d16" />
          <InputOption Icon={NewspaperIcon} title="Write article" color="#e16745" />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl, timestamp } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
          />
        );
      })}
    </div>
  );
};

export default Feed;

import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmojiPick = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmojiPicker(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor adipisicing elit. Nam, aut?</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto dolorum placeat molestiae laborum qui
              illum odio expedita ipsam ratione nihil blanditiis sint quaerat quo laboriosam, dicta animi reiciendis
              odit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto dolorum placeat molestiae laborum qui
              illum odio expedita ipsam ratione nihil blanditiis sint quaerat quo laboriosam, dicta animi reiciendis
              odit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?s=1024x1024&w=is&k=20&c=4GqVUsgCSR5s0CU2JF3cJ-2-ACDlU6WlHsjOthb7nkM="
              alt=""
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto dolorum placeat molestiae laborum qui
              illum odio expedita ipsam ratione nihil blanditiis sint quaerat quo laboriosam, dicta animi reiciendis
              odit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto dolorum placeat molestiae laborum qui
              illum odio expedita ipsam ratione nihil blanditiis sint quaerat quo laboriosam, dicta animi reiciendis
              odit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto dolorum placeat molestiae laborum qui
              illum odio expedita ipsam ratione nihil blanditiis sint quaerat quo laboriosam, dicta animi reiciendis
              odit!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="Type a message..." value={text} onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpenEmojiPicker((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={openEmojiPicker} onEmojiClick={handleEmojiPick} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;

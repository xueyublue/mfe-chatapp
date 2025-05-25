import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit numquam hic excepturi accusamus iure
          perspiciatis.
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?s=1024x1024&w=is&k=20&c=4GqVUsgCSR5s0CU2JF3cJ-2-ACDlU6WlHsjOthb7nkM="
                  alt=""
                />
                <span>photo_2024_01.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?s=1024x1024&w=is&k=20&c=4GqVUsgCSR5s0CU2JF3cJ-2-ACDlU6WlHsjOthb7nkM="
                  alt=""
                />
                <span>photo_2024_01.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://media.istockphoto.com/id/1443562748/fr/photo/mignon-chat-gingembre.jpg?s=1024x1024&w=is&k=20&c=4GqVUsgCSR5s0CU2JF3cJ-2-ACDlU6WlHsjOthb7nkM="
                  alt=""
                />
                <span>photo_2024_01.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;

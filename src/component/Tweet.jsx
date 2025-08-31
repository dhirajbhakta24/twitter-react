import '../CSS/Tweets.css';
import { useState } from 'react';
function Tweet({ tweetId, content, likes, createdAt, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrapper">
        <div className="tweet-content">
          {isEditing ? (
            <input
              type="text"
              value={content}
              onChange={(e) =>
                handleEdit({
                  id: tweetId,
                  content: e.target.value,
                  likes: likes,
                  createdAt: createdAt
                })
              }
            />
          ) : (
            content
          )}
        </div>
        <div className="edit-tweet">
          <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="tweet-like">{likes} Likes</div>
        <div className="createdAt">
          <b>Created At : </b>
          {createdAt}
        </div>
      </div>
    </div>
  );
}

export default Tweet;

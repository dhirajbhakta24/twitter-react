import '../CSS/Tweets.css';
function Tweet({ content, likes }) {
  return (
    <div
      className="tweet-wrapper
    "
    >
      <div className="tweet-content">{content}</div>

      <div className="tweet-like">{likes} Likes</div>
    </div>
  );
}

export default Tweet;

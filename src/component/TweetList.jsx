import Tweet from './Tweet';
import '../CSS/TweetList.css';

function TweetList({ tweets }) {
  return (
    <>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li className="tweet-list-wrapper">
            <Tweet content={tweet.content} likes={tweet.likes} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default TweetList;

import Tweet from './Tweet';
import '../CSS/TweetList.css';

function TweetList({ tweets, handleEdit }) {
  return (
    <>
      <ul className="tweet-list">
        {tweets.map((tweet) => (
          <li className="tweet-list-wrapper" key={tweet.id}>
            <Tweet
              tweetId={tweet.id}
              content={tweet.content}
              likes={tweet.likes}
              createdAt={tweet.createdAt.toString()}
              handleEdit={handleEdit}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
export default TweetList;

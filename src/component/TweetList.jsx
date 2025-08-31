import Tweet from "./Tweet";

function TweetList({ tweets }) {
  return (
    <>
      <ul>
        {tweets.map((tweet) => (
          <li>
            <Tweet content={tweet.content} likes={tweet.like} />
          </li>
        ))}
      </ul>
    </>
  );
}
export default TweetList;

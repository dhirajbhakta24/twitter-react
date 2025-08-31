import AddTweets from './AddTweets';
import TweetList from './TweetList';
import { useState } from 'react';

function Twitter() {
  const dummyTweets = [
    { id: 0, content: 'first tweet', likes: 2 },
    { id: 1, content: 'well hello ', likes: 4 },
    { id: 3, content: 'oo la la ', likes: 90 }
  ];
  const [tweets, setTweets] = useState(dummyTweets);

  const handleAddClick = ({ text }) => {
    const nextId = tweets[tweets.length - 1].id + 1;
    setTweets([
      ...tweets,
      {
        id: nextId,
        content: text,
        likes: Math.floor(Math.random() * 10)
      }
    ]);
  };
  return (
    <>
      <AddTweets handleAddClick={handleAddClick} />
      <TweetList tweets={tweets} />
    </>
  );
}
export default Twitter;

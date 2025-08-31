import AddTweets from './AddTweets';
import TweetList from './TweetList';
import { useState } from 'react';

function Twitter() {
  const dummyTweets = [
    { id: 0, content: 'first tweet', likes: 2, createdAt: new Date() },
    { id: 1, content: 'well hello ', likes: 4, createdAt: new Date() },
    { id: 3, content: 'oo la la ', likes: 90, createdAt: new Date() }
  ];
  const [tweets, setTweets] = useState(dummyTweets);

  const handleAddClick = ({ text }) => {
    const nextId = tweets[tweets.length - 1].id + 1;
    setTweets([
      ...tweets,
      {
        id: nextId,
        content: text,
        likes: Math.floor(Math.random() * 10),
        createdAt: new Date()
      }
    ]);
  };

  const handleEdit = (EditTweet) => {
    console.log('handle Edit called', EditTweet);
    setTweets(tweets.map((tweet) => (tweet.id == EditTweet.id ? { ...tweet, content: EditTweet.content } : tweet)));
  };
  return (
    <>
      <AddTweets handleAddClick={handleAddClick} />
      <TweetList tweets={tweets} handleEdit={handleEdit} />
    </>
  );
}
export default Twitter;

import "./App.css";
import TweetList from "./component/TweetList";

function App() {
  const dummyTweets = [
    { id: 0, content: "first tweet", likes: 2 },
    { id: 1, content: "well hello ", likes: 4 },
    { id: 3, content: "oo la la ", likes: 90 },
  ];
  return (
    <>
      <TweetList tweets={dummyTweets} />
    </>
  );
}

export default App;

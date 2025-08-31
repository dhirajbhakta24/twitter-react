import { useState } from 'react';

function AddTweets({ handleAddClick }) {
  const [text, setText] = useState('');
  return (
    <>
      <input placeholder="add tweets" value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          handleAddClick({ text });
          setText('');
        }}
      >
        Tweet !!
      </button>
    </>
  );
}
export default AddTweets;

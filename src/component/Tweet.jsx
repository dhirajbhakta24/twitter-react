function Tweet({ content, likes }) {
  return (
    <>
      <div>{content}</div>

      <div>{likes} Likes</div>
    </>
  );
}

export default Tweet;

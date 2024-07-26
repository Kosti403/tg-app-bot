import Comments from "./comments/comments";
import Post from "./post/post";

function Statistics() {
  return (
    <div className="statistics">
      <h1>Статистика</h1>
      <Post />
      <Comments />
    </div>
  );
}

export default Statistics;

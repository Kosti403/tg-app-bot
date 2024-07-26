import Comments from "./comments/comments";
import Post from "./post/post";

function Statistics() {
  return (
    <div className="h-full flex justify-around flex-col mt-5 gap-5 ">
      <h1 className="text-3xl font-bold text-center" >Статистика</h1>
      <Post />
      <Comments />
    </div>
  );
}

export default Statistics;

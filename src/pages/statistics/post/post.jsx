import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "../../../components/ui/card/CardComponents";
import { Button } from "../../../components/ui/button/button";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page = 1) => {
    try {
      const response = await fetch(
        `https://196aaaeccf054b68.mokky.dev/post?page=${page}&limit=1`
      );
      const data = await response.json();
      setPosts(data.items);
      setTotalPages(data.meta.total_pages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...swipeHandlers}>
      <h1 className="font-bold text-2xl mb-5">Posts</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      <div className="pagination">
        <Button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={"ml-5"}
        >
          Next
        </Button>
        <p className="pageNumber">
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </div>
  );
}

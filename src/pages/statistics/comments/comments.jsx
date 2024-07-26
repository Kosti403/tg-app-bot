import { useEffect, useState } from "react";
import Card from "../../../components/ui/CardComponents";
import { useSwipeable } from "react-swipeable";
export default function Comments() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchComments = async (page = 1) => {
    try {
      const response = await fetch(
        `https://196aaaeccf054b68.mokky.dev/comments?page=${page}&limit=1`
      );
      const data = await response.json();
      setComments(data.items);
      setTotalPages(data.meta.total_pages);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments(currentPage);
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
      <h1>Comments</h1>
      <div className="comment-list">
        {comments.map((comment) => (
          <Card
            key={comment.id}
            title={comment.name}
            subtitle={comment.email}
            body={comment.body}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

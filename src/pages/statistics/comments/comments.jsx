import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "../../../shared/ui/button/button";
import Card from "../../../shared/ui/card/CardComponents";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [animationParent] = useAutoAnimate();

  const fetchComments = async (page = 1) => {
    try {
      const response = await fetch(
        `https://196aaaeccf054b68.mokky.dev/comments?page=${page}&limit=2`
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

  function capitalizeFirstWord(text) {
    if (!text) return "";
    const [firstWord, ...rest] = text.split(" ");
    return [firstWord.toUpperCase(), ...rest].join(" ");
  }

  return (
    <div {...swipeHandlers} className="h-full mb-10">
      <h1 className="font-bold text-2xl mb-5">Comments</h1>
      <div ref={animationParent}>
        {comments.map((comment) => (
          <Card
            key={comment.id}
            title={capitalizeFirstWord(comments.title)}
            subtitle={capitalizeFirstWord(comment.email)}
            body={capitalizeFirstWord(comment.body)}
          />
        ))}
        <div className="pagination">
          <Button onClick={handlePrev} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="ml-5"
          >
            Next
          </Button>
          <p className="pageNumber">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
}

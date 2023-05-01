import { BsArrowUpSquare } from "react-icons/bs";

const GoToTop = () => {
  const goToBtn = () => {
    const container = document.body.lastElementChild.lastElementChild;

    container.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="top-btn" onClick={goToBtn}>
        <button className="btn">
          Back to Top <BsArrowUpSquare />
        </button>
      </div>
    </div>
  );
};

export default GoToTop;

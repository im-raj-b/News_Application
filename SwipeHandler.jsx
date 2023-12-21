import { Route, Routes, useNavigate } from "react-router-dom";
let touchStartX;
const SwipeHandler = {
  handler: function () {
    const history = useNavigate();
    let touchStartX;

    const handleTouchEnd = (e) => {
      if (!touchStartX) {
        return;
      }

      const touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchEndX - touchStartX;

      // Adjust this threshold as needed
      const minSwipeDistance = 50;

      if (swipeDistance > minSwipeDistance) {
        // Swipe right, navigate to a different route
        history("/main");
        console.log("right");
      } else if (swipeDistance < -minSwipeDistance) {
        // Swipe left, navigate to a different route
        history("/tech");
        console.log("left");
      }

      touchStartX = null;
    };
  },
  handleTouchStart: function (e) {
    touchStartX = e.touches[0].clientX;
  },
  handleTouchMove: function (e) {
    e.preventDefault();
  },
};

export default SwipeHandler;

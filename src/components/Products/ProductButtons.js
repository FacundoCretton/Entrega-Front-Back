import React from "react";
import Button from "../UI/Button/Button";

export const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Ver más</Button>;
};

export const LoadLessButton = ({ onClick }) => {
  return <Button onClick={onClick}>Ver menos</Button>;
};

export const handleLoadMore = (visibleCount, setVisibleCount) => {
  setVisibleCount((prevCount) => prevCount + 4);
};

export const handleLoadLess = (visibleCount, setVisibleCount) => {
  setVisibleCount((prevCount) => {
    if (prevCount <= 4) {
      return 4;
    } else {
      return prevCount - 4;
    }
  });
};


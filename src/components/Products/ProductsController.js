export const handleLoadMore = (visibleCount, setVisibleCount, totalCount) => {
  setVisibleCount((prevCount) => Math.min(prevCount + 3, totalCount));
};

export const handleLoadLess = (visibleCount, setVisibleCount) => {
  setVisibleCount((prevCount) => Math.max(prevCount - 3, 3));
};

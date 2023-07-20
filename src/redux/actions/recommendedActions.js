export const setRecommended = (recipe) => {
    return {
      type: 'SET_RECOMMENDED',
      payload: recipe,
    };
  };
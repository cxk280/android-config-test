export function increment() {
  return {
    type: 'increment',
  };
}

export function decrement() {
  return {
    type: 'decrement',
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { header } = getState();

    if (header.get('header') % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

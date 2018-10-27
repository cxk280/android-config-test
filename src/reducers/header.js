import Immutable from 'immutable';

const initialState = Immutable.Map({ header: 0 });

const actionsMap = {
  increment(state /*, action*/) {
    return state.update('header', n => n + 1);
  },
  decrement(state /*, action*/) {
    return state.update('header', n => n - 1);
  },
};

export default (state = initialState, action) => {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
};

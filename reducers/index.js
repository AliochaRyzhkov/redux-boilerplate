import { combineReducers } from 'redux';

function identity(state = '') {
  return state;
}

const rootReducer = combineReducers({
  identity,
});

export default rootReducer;

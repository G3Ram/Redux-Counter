import { INCREMENT, DECREMENT } from "../actions";

const initialState = {
  count: 3
};

const counter = (state = initialState, action) => {
  console.log("counter reducer running " + action);
  return state;
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    case DECREMENT:
    // Fill in the body of this case
    default:
      return state;
  }
};

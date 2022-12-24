import { GET_SPACE_DATA } from "./actionType";

const initialState = {
  space_history: [],
  loading: false
};

const spaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPACE_DATA:
      return {
        ...state,
        space_history: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default spaceReducer;

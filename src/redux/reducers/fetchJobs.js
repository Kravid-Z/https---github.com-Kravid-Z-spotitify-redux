import {
  FETCH_USER_SEARCH,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_NO_RESULTS
} from "../actionTypes.js";

const initialState = {
  loading: false,
  results: [],
  error: "",
  mssg: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SEARCH: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: "",
        mssg: "success",
      };
    }
    case FETCH_USER_NO_RESULTS: {
      return {
        ...state,
        loading: false,
        results: [],
        error: "",
        mssg: action.payload,
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;

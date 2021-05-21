import { FETCH_USER_SEARCH, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_NO_RESULTS, FETCH_ALBUM } from "../actionTypes.js";

const initialState = {
  loading: false,
  searchResults: [],
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
        searchResults: action.payload,
        error: "",
        mssg: "success",
      };
    }
    case FETCH_USER_NO_RESULTS: {
      return {
        ...state,
        loading: false,
        searchResults: [],
        error: "",
        mssg: action.payload,
      };
    }
    case FETCH_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        searchResults: [],
        error: action.payload,
      };
    }
    case FETCH_ALBUM: {
      return {
        ...state,
        loading: false,
        searchResults: action.payload,
        error: "",
        mssg: "success",
      };
    }
    default:
      return state;
  }
};

export default searchReducer;

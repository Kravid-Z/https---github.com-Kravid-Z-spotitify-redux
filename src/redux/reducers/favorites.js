import { TOOGLE_FAVORITES } from "../actionTypes.js";

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.every((e) => e.id !== action.payload.id)
          ? [...state.favorites, action.payload]
          : state.favorites.filter((job) => job.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default favoritesReducer;

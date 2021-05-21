import { TOOGLE_FAVORITES } from "./actionTypes.js";

export const toogleFavoritesAction = (job) => ({
  type: TOOGLE_FAVORITES,
  payload: job,
});

import { combineReducers } from "redux";
import searchReducer from "./fetchJobs.js";
import favorites from "./favorites.js";

export default combineReducers({searchReducer, favorites });

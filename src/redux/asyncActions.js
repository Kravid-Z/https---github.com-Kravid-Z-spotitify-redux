import { FETCH_USER_SEARCH, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_NO_RESULTS, FETCH_ALBUM } from "./actionTypes";

export const fetchAlbum = (id) => {
  console.log("fetching album");
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_USER_SEARCH });

      console.log("its album");
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`);
      let results = await resp.json();

      console.log("resp", resp);
      console.log("results", results);
      if (resp.ok) {
        console.log("response ok");
        dispatch({ type: FETCH_ALBUM, payload: results });
      } else {
        console.log("response error");
        const mssg = "Sorry not results for this search";
        dispatch({ type: FETCH_USER_NO_RESULTS, payload: mssg });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_USER_FAILURE, payload: error });
    }
  };
};
export const fetchUserSearch = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: FETCH_USER_SEARCH });
      console.log("query", query);

      console.log("its search");
      let resp = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      let results = await resp.json();
      results = results.data;

      console.log("resp", resp);
      console.log("results", results);
      if (resp.ok) {
        console.log("reponse ok");
        dispatch({ type: FETCH_USER_SUCCESS, payload: results });
      } else {
        console.log("response error");
        const mssg = "Sorry not results for this search";
        dispatch({ type: FETCH_USER_NO_RESULTS, payload: mssg });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: FETCH_USER_FAILURE, payload: error });
    }
  };
};

import * as api from "../api";
import { setSortOrder } from "./sortOrder";

export const getPosts = (sortOrder) => async (dispatch, getState) => {
  try {
    if (getState().sortOrder !== sortOrder.rent) {
      dispatch({ type: "SET_LOADING_TRUE" });
      dispatch(setSortOrder(sortOrder.rent));
      const { data } = await api.fetchPosts(sortOrder);
      data.Active = 1;
      console.log("#############################");
      console.log(data);
      dispatch({ type: "FETCH_ALL", payload: data });
      dispatch({ type: "SET_LOADING_FALSE" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {}
};

export const clearPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "CLEAR_ALL" });
  } catch (error) {
    console.log(error.message);
  }
};

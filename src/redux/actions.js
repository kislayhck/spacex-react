import axios from "axios";
import { GET_SPACE_DATA } from "./actionType";

const getSpaceData = (data) => ({
  type: GET_SPACE_DATA,
  payload: data
});

export const loadSpaceData = () => {
  return function (dispatch) {
    axios
      .get("https://api.spacexdata.com/v3/history")
      .then((resp) => {
        dispatch(getSpaceData(resp.data));
      })
      .catch((err) => console.log(err));
  };
};

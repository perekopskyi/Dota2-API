import { LOAD_ALL_CHARACTERS, START, SUCCESS, FAIL } from "../constants";
import ApiEndpoints from "../../api/endpoints";
import Requests from "../../api/requests";

const request = new Requests();

const api = request.getPath(ApiEndpoints.HEROES);

export function loadAllCharacters() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_CHARACTERS + START,
      loading: true,
    });

    // Axios.get(path).then(({ data }) => {
    //   setList(data);
    // });

    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response.json();
      })
      .then((result) => {
        dispatch({
          type: LOAD_ALL_CHARACTERS + SUCCESS,
          loading: false,
          error: null,
          payload: result,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ALL_CHARACTERS + FAIL,
          loading: false,
          error,
        });
      });
  };
}

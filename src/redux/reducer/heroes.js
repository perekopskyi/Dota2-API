import { LOAD_ALL_CHARACTERS, START, SUCCESS, FAIL } from "../constants";

const initialState = {
  loading: false,
  error: null,
  heroes: [],
};

export default (heroesState = initialState, action) => {
  console.log("initialState: ", initialState);
  const { type, payload, error } = action;

  switch (type) {
    case LOAD_ALL_CHARACTERS + START:
      return { ...heroesState, loading: true, error: null };
    case LOAD_ALL_CHARACTERS + SUCCESS:
      return { ...heroesState, loading: false, error: null, heroes: payload };
    case LOAD_ALL_CHARACTERS + FAIL:
      return { ...heroesState, loading: false, error: error };
    default:
      return heroesState;
  }
};

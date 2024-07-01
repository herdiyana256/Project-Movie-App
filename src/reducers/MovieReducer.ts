//mengelola state film 
import { combineReducers } from 'redux';

interface StateFilm {
  films: Array<{
    id: number;
    judul: string;
    poster: string;
    sinopsis: string;
  }>;
}

const initialState: StateFilm = {
  films: [],
};

const reducerFilm = (state = initialState, action: any) => {
  switch (action.type) {
    case 'GET_DETAIL_FILM_SUCCESS':
      return { ...state, films: [...state.films, action.film] };
    default:
      return state;
  }
};

export default combineReducers({ film: reducerFilm });
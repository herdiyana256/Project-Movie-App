//aksi untuk berinteraksi dengan reducer film dan API.
import { Dispatch } from 'redux';
import getDetailFilm from '../api/MovieApi';

export const getDetailFilmAction = (idFilm: number) => async (dispatch: Dispatch) => {
  try {
    const film = await getDetailFilm(idFilm);
    dispatch({ type: 'GET_DETAIL_FILM_SUCCESS', film });
  } catch (error) {
    console.error(error);
  }
};
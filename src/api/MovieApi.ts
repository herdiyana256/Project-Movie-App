//Buat layanan API untuk mengambil data film dari API jarak jauh atau database local.

import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/movie';

const getDetailFilm = async (idFilm: number) => {
  try {
    const response = await axios.get(`${apiUrl}/${idFilm}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getDetailFilm;
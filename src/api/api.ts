// const API_URL = 'https://api.example.com';

// const fetchSearchResults = async (query: string) => {
//   const response = await fetch(`${API_URL}/search?q=${query}`);
//   const data = await response.json();
//   return data.results;
// };

// export default fetchSearchResults;


// api.ts
import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'KUNCI_API_ANDA'; // Ganti dengan kunci API TMDB sendiri

export const searchItems = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
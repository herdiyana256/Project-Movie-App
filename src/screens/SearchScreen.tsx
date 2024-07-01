// import React from "react";
// import { View, Text } from "react-native";

// export default function Search(): JSX.Element {
//   return (
//     <View>
//       <Text>Search</Text>
//     </View>
//   );
// }


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import axios from 'axios';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState(''); // state untuk menyimpan kata kunci pencarian (keyword)
  const [searchResults, setSearchResults] = useState([]); // state untuk menyimpan hasil pencarian (result)

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery !== '') {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${searchQuery}`); // isi..API key Sendiri based on TMDB
          setSearchResults(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Cari film..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SearchScreen;

/*
note :
1. add  searchQuery untuk menyimpan kata kunci pencarian dan searchResults untuk menyimpan hasil pencarian.
2. model menggunakan useEffect untuk membuat API call ke Themoviedb API untuk mencari film berdasarkan kata kunci pencarian.
3.  created fungsi handleSearch untuk mengupdate state searchQuery ketika pengguna mengetikkan kata kunci pencarian.
4. model menggunakan FlatList untuk menampilkan hasil pencarian



Cara kerja  fitur pencaharian : 
1. Pastikan Anda telah mengganti YOUR_API_KEY di SearchScreen.tsx dengan API key yang valid dari TMDB.
2. Jalankan aplikasi menggunakan emulator atau perangkat fisik .
3. Klik atau tekan tombol "Cari film..." pada layar utama.
4. Masukkan kata kunci pencarian, misalnya "The Matrix", dan tekan tombol "Enter" atau tekan tombol "Cari" pada keyboard.
5. Pastikan film yang Anda cari muncul dalam daftar hasil pencarian.



Action changes :
1. Membuat layar pencarian film dengan SearchScreen komponen.
2.Menghubungkan SearchScreen ke BottomTabNavigator dan menambahkannya sebagai salah satu layar navigasi.
3.Membuat state lokal searchQuery dan searchResults di SearchScreen komponen.
4.Membuat fungsi handleSearch untuk mengupdate state searchQuery saat pengguna memasukkan kata kunci pencarian.
5.Membuat fungsi fetchSearchResults untuk mengambil data film dari TMDB API menggunakan axios dan memperbarui state searchResults dengan hasil pencarian.
6.Menampilkan kata kunci pencarian dan daftar hasil pencarian menggunakan TextInput dan FlatList komponen.
*/

//Layar ini akan digunakan untuk menampilkan detail film yang dipilih.
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';

interface Props {
  route: any;
  navigation: any;
}

const MovieScreen = ({ route, navigation }: Props) => {
  const { genreId } = route.params;
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    // Fetch movies from API or database based on genreId
    const fetchMovies = async () => {
      const response = await fetch(`https://api.example.com/movies?genreId=${genreId}`);
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, [genreId]);

  return (
    <View>
      <Text>Movies for genre {genreId}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieScreen;
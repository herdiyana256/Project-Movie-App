import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

interface Props {
  navigation: any;
}

const genres = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Drama' },
  { id: 4, name: 'Horror' },
  { id: 5, name: 'Romance' },
];

const GenreScreen = ({ navigation }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleSelectGenre = (genre: any) => {
    setSelectedGenre(genre);
    navigation.navigate('MovieScreen', { genreId: genre.id });
  };

  return (
    <View>
      <Text>Select a genre:</Text>
      <FlatList
        data={genres}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectGenre(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GenreScreen;
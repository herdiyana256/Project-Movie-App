
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cari film..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
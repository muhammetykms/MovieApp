import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = () => {
  const [text, setText] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput placeholder="Arama..." value={text} onChangeText={setText} />
    </View>
  );
};
export default SearchBar;

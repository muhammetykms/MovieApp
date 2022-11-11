import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, Text, Touchable} from 'react-native';
import {POSTER_IMAGE} from '../../config';
import {GET} from '../../Services/API';
import styles from './TrendingMovie.Style';
import Loader from '../Loader/Loader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TrendingMovie = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      setMovies(data.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>{props.title}</Text>
          <FlatList
            keyExtractor={item => item.id}
            data={movies}
            renderItem={item => displayMovies(item, props)}
            horizontal
          />
        </View>
      )}
    </View>
  );
};
const displayMovies = ({item}, {navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailMovie', {movieId: item.id});
      }}
      style={{marginHorizontal: 10}}>
      <Image
        source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
        style={styles.poster_image}
      />
      <Text style={styles.movie_title}>{item.original_title}</Text>
    </TouchableOpacity>
  );
};
export default TrendingMovie;

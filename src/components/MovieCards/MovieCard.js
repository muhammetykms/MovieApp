import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import styles from './MovieCard.Style';
const MovieCard = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);

      const images = response.results.map(
        data => `${IMAGE_POSTER_URL}${data.backdrop_path}`,
      );
      let backImages = [];
      for (let i = 0; i < 10; i++) {
        backImages = [...backImages, images[i]];
      }
      setImages(backImages);
    };
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <ScrollView>
          <SliderBox
            images={images}
            onCurrentImagePressed={index =>
              navigation.navigate('DetailMovie', {
                movieId: movies[index].id,
              })
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MovieCard;

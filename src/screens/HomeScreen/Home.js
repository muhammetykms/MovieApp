import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './Home.Style';
import MovieCards from '../../components/MovieCards';
import TredingPeople from '../../components/TredingPeople/TredingPeople';
import TrendingMovie from '../../components/TrendingMovies/TrendingMovie';

const Home = props => {
  //----------------------------------------------------------------
  return (
    <ScrollView>
      <View style={styles.sectionBg}>
        <MovieCards />
        <TredingPeople title="Popüler Artistler" url="/trending/person/week" />
        <TrendingMovie
          title="Popüler Filmler"
          url="/movie/top_rated"
          navigation={props.navigation}
        />
      </View>
    </ScrollView>
  );
};
export default Home;

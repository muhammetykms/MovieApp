import React, {useState, useEffect} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import {GET} from '../../Services/API';
import {IMAGE_POSTER_URL} from '../../config';
import Loader from '../Loader/Loader';
import styles from './TredingPeople.Style';

const TredingPeople = props => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState();

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(props.url);
      setPeople(props.isForPage === 'details' ? data.cast : data.results);
      setLoading(false);
    };
    getPeople();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={styles.heading}>{props.title}</Text>
          <FlatList
            data={people}
            renderItem={displayPeople}
            horizontal
            keyExtractor={item => item.id}
          />
        </View>
      )}
    </View>
  );
};
const displayPeople = ({item}) => {
  return (
    <View style={styles.trending_people_container}>
      <Image
        source={{uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
        style={styles.trending_people_image}
      />
      <Text style={styles.trending_people_name}>{item.name}</Text>
    </View>
  );
};

export default TredingPeople;

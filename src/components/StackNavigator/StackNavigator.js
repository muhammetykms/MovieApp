import * as React from 'react';
import {View, Image} from 'react-native';

//  --------------Screens-----------------
import SignInScreen from '../../screens/SignInScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import ForgotPassScreen from '../../screens/ForgotPassScreen/ForgotPass';
import HomeScreen from '../../screens/HomeScreen/Home';
import SearchScreen from '../../screens/SearchScreen';
import FavoritesScreen from '../../screens/FavoritesScreen/Favorites';
import PersonScreen from '../../screens/PersonScreen';
import Constants from '../../Constants';
import DetailMovieScreen from '../../screens/DetailMovieScreen/DetailMovie';
import TrendingMovieScreen from '../TrendingMovies/TrendingMovie';
import MovieCardScreen from '../MovieCards/MovieCard';

// --------------Navigations-----------------
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: Constants.baseColor,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Filmler',
          headerTitleStyle: {color: Constants.textColor},
          headerStyle: {backgroundColor: Constants.baseColor},
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Image
                source={require('../../assets/menu.png')}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: Constants.textColor,
                }}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 20}}>
              <Image
                source={require('../../assets/search.png')}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: Constants.textColor,
                }}
              />
            </View>
          ),
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/home.png')}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.fadedColor
                    : Constants.textColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/search.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.fadedColor
                    : Constants.textColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/favorite.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.fadedColor
                    : Constants.textColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Person"
        component={PersonScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('../../assets/person.png')}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: focused
                    ? Constants.fadedColor
                    : Constants.textColor,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="BottomTab"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
      <Stack.Screen name="DetailMovie" component={DetailMovieScreen} />
      <Stack.Screen name="TrendingMovie" component={TrendingMovieScreen} />
      <Stack.Screen name="MovieCard" component={MovieCardScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

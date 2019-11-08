import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Starwars from './src/Starwars';
import People from './src/People';

const HeaderTitle = ({ title }) => (
  <Text style={{ fontSize: 34, color: 'rgb(255, 232, 31)' }}>
    {title}
  </Text>
);

const RootStack = createStackNavigator({
  Starwars: {
    screen: Starwars,
    navigationOptions: () => ({
      headerTitle: () => <HeaderTitle title="Star Wars" />,
    }),
  },
  People: {
    screen: People,
    navigationOptions: () => ({
      headerTitle: () => <HeaderTitle title="People" />,
    }),
  },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 1,
      borderBottomColor: '#ffe81f',
      height: 110,
    },
    headerTintColor: '#ffe81f',
    headerPressColorAndroid: 'white',
  }
});

const App = createAppContainer(RootStack);

export default App;

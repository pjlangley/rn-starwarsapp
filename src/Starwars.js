import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

import Container from './Container';

const links = [
  { title: 'People' },
  { title: 'Films' },
  { title: 'StarShips' },
  { title: 'Vehicles' },
  { title: 'Species' },
  { title: 'Planets' },
];

class Starwars extends React.Component {
  navigate = (link) => {
    this.props.navigation.navigate(link);
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableHighlight
        onPress={() => this.navigate(item.title)}
        style={[styles.item, { borderTopWidth: index === 0 ? 1 : null }]}
      >
        <Text style={styles.text}>
          {item.title}
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <Container>
        <FlatList
          data={links}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255, 232, 31, 0.2)',
    borderBottomWidth: 1,
  },
  text: {
    color: '#ffe81f',
    fontSize: 18,
  },
});

export default Starwars;

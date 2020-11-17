import React from 'react';

import {View, Text, Image} from 'react-native';

class Movie extends React.Component {
  render(): React$Node {
    return (
      <View>
        <Text>
          {this.props.title} {'\n'} {this.props.year} {'\n'}
        </Text>
        <Image source={this.props.poster} />
      </View>
    );
  }
}
const movie = {title: 'Doctor Sleep', year: '2019'};
const MOVIES_DATA = [
  {
    title: 'Doctor Sleep',
    year: '2019',
    poster: require('./img/doctor-sleep.jpg'),
  },
  {
    title: 'Midway',
    year: '2019',
    poster: require('./img/midway.jpg'),
  },
];

const MovieList = () => {
  return MOVIES_DATA.map((MOVIES_DATA) => (
    <Movie
      title={MOVIES_DATA.title}
      year={MOVIES_DATA.year}
      poster={MOVIES_DATA.poster}
    />
  ));
};

export {Movie};
export {MovieList};

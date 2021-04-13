import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../res/colors';

class CoinDetailScreen extends React.Component {
  state = {
    coin: {},
  };

  getSymbolIcon = symbolStr => {
    if (symbolStr) {
      const symbol = symbolStr.toLowerCase().replace(' ', '-');
      return `https://c1.coinlore.com/img/25x25/${symbol}.png`;
    }
  };

  componentDidMount() {
    const { coin } = this.props.route.params;
    this.props.navigation.setOptions({ title: coin.symbol });
    this.setState({ coin });
  }

  render() {
    const { coin } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subHeader}>
          <Image
            style={styles.iconImage}
            source={{ uri: this.getSymbolIcon(coin.name) }}
          />
          <Text style={styles.titleText}>{coin.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  subHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 16,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
});

export default CoinDetailScreen;

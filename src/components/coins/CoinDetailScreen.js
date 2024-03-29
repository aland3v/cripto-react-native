import React from 'react';
import { View, Text, Image, StyleSheet, SectionList } from 'react-native';
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

  getSection = coin => {
    const section = [
      { title: 'Market cap', data: [coin.market_cap_usd] },
      { title: 'Volume 24h', data: [coin.volume24] },
      { title: 'Change 24h', data: [coin.percent_change_24h] },
    ];
    return section;
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
        <SectionList
          sections={this.getSection(coin)}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View style={styles.sectionItem}>
              <Text style={styles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionText}>{section.title}</Text>
            </View>
          )}
        />
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
  sectionHeader: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 8,
  },
  sectionItem: {
    padding: 8,
  },
  itemText: {
    color: '#fff',
    fontSize: 14,
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CoinDetailScreen;

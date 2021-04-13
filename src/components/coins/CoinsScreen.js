import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Http from '../../libs/http';

// API: https://www.coinlore.com/cryptocurrency-data-api

class CoinsScreen extends React.Component {
  state = {
    coins: [],
  };

  componentDidMount = async () => {
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({ coins: res.data });
  };
  handlePress = () => {
    console.log('go to detail', this.props);
    this.props.navigation.navigate('CoinDetail');
  };
  render() {
    const { coins };
    const { coins };
    return (
      <View style={styles.container}>
        <Text>Coins Screen</Text>
        <Pressable style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Coins Screen</Text>
        </Pressable>
      </View>
    );
  }
}

export default CoinsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

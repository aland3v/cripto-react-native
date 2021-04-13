import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';

// API: https://www.coinlore.com/cryptocurrency-data-api

class CoinsScreen extends React.Component {
  state = {
    coins: [],
    loading: true,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const res = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );
    this.setState({ coins: res.data, loading: false });
  };

  handlePress = () => {
    console.log('go to detail', this.props);
    this.props.navigation.navigate('CoinDetail');
  };

  render() {
    const { coins, loading } = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator color="#fff" size="large" style={styles.loader} />
        ) : null}
        <FlatList
          data={coins}
          renderItem={({ item }) => <CoinsItem item={item} />}
        />
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
  loader: {
    marginTop: 60,
  },
});

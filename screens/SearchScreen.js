import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SearchContext from '../context/SearchContext';
import FeedList from '../component/FeedList';
import LogContext from '../context/LogContext';
function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  const {logs} = useContext(LogContext);

  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default SearchScreen;

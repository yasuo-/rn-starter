import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Text, Button } from 'react-native-elements';

import { Fonts, Colors } from '../constants';


export default function HomeScreen(props) {

  return (
    <View style={styles.container}>
      <View style={styles.section}>
          <Text h1>Home</Text>
          <Button
            title="ページ遷移"
            type="outline"
            onPress={() => props.navigation.navigate('Page')}
          />
          <Button
            title="ページ遷移Sample Counter"
            type="outline"
            onPress={() => props.navigation.push('SampleCounter')}
          />
           <Button
            title="ページ遷移Sample Todo"
            type="outline"
            onPress={() => props.navigation.navigate('SampleTodo')}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

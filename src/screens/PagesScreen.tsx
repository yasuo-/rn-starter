import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
} from 'react-native';
import {Entypo as Icon} from '@expo/vector-icons';
import {Theme, Fonts} from '../constants';


export default function PagesScreen(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>PagesScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.COLORS.WHITE,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: Theme.COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: Theme.COLORS.PRIMARY,
    fontFamily: Fonts.primary,
  },
  itemImage: {
    height: 35,
  },
});

import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Text, Button, Header } from 'react-native-elements';
import { Block, theme } from 'galio-framework';
// import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch, useSelector } from "react-redux";

import DefaultCloseIcon from 'app/src/components/Icon/DefaultCloseIcon';
const { width } = Dimensions.get('screen');


/**
 * ActivityManageSearchPanelScreen
 * 活動管理
 */
const  ActivityManageSearchPanelScreen = (props) => {
  // dispatchの取得
  const dispatch = useDispatch();


  // jsx
  return (
    <View>
      <Header
        centerComponent={{ text: '検索条件', style: { color: '#000', fontWeight: 600, fontSize: 18} }}
        leftComponent={
          <DefaultCloseIcon
            handleClick={() => props.navigation.goBack()}
          />
        }
        rightComponent={
          { text: 'クリア', style: { color: '#C8EFEA'}}
        }
        backgroundColor={"#ffffff"}
      />
      <View style={styles.container}>

        <Block center style={styles.submitArea}>
          <Button
            title="検索"
            type="outline"
            titleStyle={styles.submitText}
            buttonStyle={styles.submitButton}
            onPress={() => props.navigation.goBack()}
          />
        </Block>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingTop: 40
  },
  section: {
    paddingBottom: 40
  },
  submitArea: {
    marginTop: 128
  },
  submitText: {
    color: '#C8EFEA',
    fontSize: 14
  },
  submitButton: {
    backgroundColor: '#fff',
    borderColor: '#C8EFEA',
    width: 240,
    height: 60,
    borderRadius: 30
  }
});

export default ActivityManageSearchPanelScreen

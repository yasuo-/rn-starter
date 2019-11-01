import React from "react";
import { StyleSheet, View, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { Block, theme, Text, Button } from 'galio-framework';
// import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch, useSelector } from "react-redux";


import DefaultSearchIcon from 'app/src/components/Icon/DefaultSearchIcon';
import Tab from 'app/src/components/Tag/CheckWIthTag';
const { width } = Dimensions.get('screen');


/**
 * ActivityManageListScreen
 * 活動管理
 */
const  ActivityManageListScreen = (props) => {
  // dispatchの取得
  const dispatch = useDispatch();


  // jsx
  return (
    <SafeAreaView>
      <Header
        rightComponent={
          <DefaultSearchIcon
            handleClick={() => props.navigation.navigate('ActivityManageSearch')}
          />
        }
        backgroundColor={"#ffffff"}
        containerStyle={{
          borderBottomColor: "#ffffff"
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >

        <View>
          <Text muted>
            0件
          </Text>
          <Button
            title="Sign in"
            type="outline"
            onPress={() => props.navigation.push('ActivityManageShowMember')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default ActivityManageListScreen

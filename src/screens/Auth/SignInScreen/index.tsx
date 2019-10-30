import React from "react";
import { StyleSheet, View, StatusBar } from 'react-native';
import { Text, Button } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { useDispatch, useSelector } from "react-redux";



/**
 * SignInScreen
 * counter
 */
const SignInScreen = (props) => {
  // dispatchの取得
  const dispatch = useDispatch();



  // jsx
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Button
          title="Sign in"
          type="outline"
          onPress={() => props.navigation.push('Home')}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

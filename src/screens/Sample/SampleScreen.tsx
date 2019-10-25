import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { useDispatch, useSelector } from "react-redux";


import counterModule from "app/src/modules/counterModule";

/**
 * SampleScreen
 * counter
 */
const SampleScreen = () => {
  // dispatchの取得
  const dispatch = useDispatch();

  // stateの取得
  const counter = useSelector(state => state.counter);

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());


  // jsx
  return (
    <View>
      <Text>{counter}</Text>

      <Button
        title="increment"
        type="outline"
        onPress={increment()}
      />
      <Button
        title="decrement"
        type="outline"
        onPress={decrement()}
      />
    </View>
  )
}

export default SampleScreen

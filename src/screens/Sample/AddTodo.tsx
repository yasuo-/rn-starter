import React, { useState } from "react";
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch } from "react-redux";


import todosModule from "app/src/redux/modules/todosModule";


const UselessTextInput = (props) => {
  return (
    <TextInput
      style={{height: 30, borderColor: 'gray', borderWidth: 1}}
      editable
      maxLength={40}
      {...props}
    />
  );
}


/**
 * AddTodo
 * todo add
 */
const AddTodo = props => {

  // local state
  const [value, onChangeText] = useState("");

  // dispatchの取得
  const dispatch = useDispatch();

  // ハンドラー 追加後 テキストクリア
  const addTodo = () => {
    if (value !== "") {
      dispatch(todosModule.actions.addTodo(value));
      onChangeText("");
    }
  };

  // jsx
  return (
    <View>
      <Button
        title="Add"
        type="outline"
        onPress={addTodo}
      />
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />

    </View>
  )
}

export default AddTodo

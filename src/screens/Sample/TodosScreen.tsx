import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Button } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import StandardBackHeader from "app/src/components/Header/StandardBackHeader";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


/**
 * TodosScreen
 * todo screen
 */
const TodosScreen: React.FC = (props: any) => (
  <SafeAreaView>
    <View>
      <AddTodo />
      <TodoList />
      <Button
        onPress={() => props.navigation.goBack()}
        title="閉じる"
      />
    </View>
  </SafeAreaView>
)

export default TodosScreen

import React, { useState } from "react";
import { StyleSheet, View } from 'react-native';

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

/**
 * TodosScreen
 * todo screen
 */
const TodosScreen: React.FC = () => (
  <View>
    <AddTodo />
    <TodoList />
  </View>
)

export default TodosScreen

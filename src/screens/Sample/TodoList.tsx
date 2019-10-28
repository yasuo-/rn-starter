import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { todoListSelector } from "app/src/redux/selectors/todoSelector";
import todosModule from "app/src/redux/modules/todosModule";

/**
 * TodoList
 * list
 */
const TodoList = () => {
  // dispatchの取得
  const dispatch = useDispatch();

  // stateの取得
  const todos = useSelector(todoListSelector);

  const toggleTodo = (id: number) => dispatch(todosModule.actions.toggleTodo(id));


  // jsx
  return (
    <View>
        {
          todos.map(todo => (
            <TouchableOpacity
              key={todo.id}
              onPress={() => toggleTodo(todo.id)}
            >
              <Text
                key={todo.id}
              >{todo.id}: {todo.text}</Text>
            </TouchableOpacity>
          ))
        }
    </View>
  )
}

export default TodoList

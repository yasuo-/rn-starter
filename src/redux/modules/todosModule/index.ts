import { createSlice, PayloadAction } from 'redux-starter-kit';

// 型定義
interface Todo {
  id: number,
  text: string,
  completed: boolean,
}

// state
export type TodosState = {
  nextTodoId: number,
  list: Todo[]
}

// init state
const todoInitialState: TodosState = {
  nextTodoId: 0,
  list: []
}


const todosModule = createSlice({
  name: "todos",
  initialState: todoInitialState,
  reducers: {
    // add
    addTodo: (state, action: PayloadAction<string>) => {
      const todo = {
        id: state.nextTodoId++,
        text: action.payload,
        completed: false
      };
      // arrayにpushしている
      // 本来 Reduxの state は不変 (immutable) として扱い、配列操作はタブー.
      // redux-starter-kitでは immer というライブラリがあるおかげで成立する.
      state.list.push(todo);
    },

    // completedのtoggle
    toggleTodo: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.list.forEach(todo => {
        todo.completed = todo.id === id ? !todo.completed : todo.completed;
      });
    }

  }
})

export default todosModule;

import {combineReducers} from 'redux-starter-kit';
import NavigationStateReducer from './modules/navigation';
import counterModule from './modules/counterModule';
import todosModule from './modules/todosModule';

const rootReducer = combineReducers({
  // sample
  counter: counterModule.reducer,
  todos: todosModule.reducer,
  //
  navigation: NavigationStateReducer,
});

export default rootReducer;

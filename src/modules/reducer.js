import { combineReducers } from "redux-starter-kit";
import NavigationStateReducer from './navigation';
import CounterModule from './counterModule';


export default combineReducers({
  // sample
  // counter: CounterModule,
  //
  navigation: NavigationStateReducer,
});

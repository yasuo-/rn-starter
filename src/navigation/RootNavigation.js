/* eslint-disable import/no-unresolved */
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
// sample
import SampleScreen from 'app/src/screens/Sample/SampleScreen';
import SampleTodoScreen from 'app/src/screens/Sample/TodosScreen';

import HomeScreen from 'app/src/containers/HomeScreen';
import PageScreen from 'app/src/containers/PagesScreen';

const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Page: {
    screen: PageScreen,
  },
  SampleCounter: {
    screen: SampleScreen,
  },
  SampleTodo: {
    screen: SampleTodoScreen,
  },
});

export default createAppContainer(stackNavigator);

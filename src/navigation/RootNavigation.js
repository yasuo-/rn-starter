/* eslint-disable import/no-unresolved */
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
// sample
import SampleScreen from 'app/src/screens/Sample/SampleScreen';


import HomeScreen from 'app/src/containers/HomeScreen';
import PageScreen from 'app/src/containers/PagesScreen';



const stackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Page: {
    screen: PageScreen
  },
  Sample: {
    screen: SampleScreen
  }
})

export default createAppContainer(stackNavigator);

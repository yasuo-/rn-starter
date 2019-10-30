import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';


// sample
import SampleScreen from 'app/src/screens/Sample/SampleScreen';
import SampleTodoScreen from 'app/src/screens/Sample/TodosScreen';


import HomeScreen from 'app/src/containers/HomeScreen';
import PageScreen from 'app/src/containers/PagesScreen';

// BottomTabBar
const TabBarComponent = props => <BottomTabBar {...props} />;


const stackNavigator2 = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    SampleTodo: {
      screen: SampleTodoScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

const stackNavigator = createStackNavigator({
  Home: {
    screen: stackNavigator2,
    navigationOptions: ({ navigation }) => ({
      header: null, // header(navbarなし)
    }),
  },
  Page: {
    screen: PageScreen,
  },
  SampleCounter: {
    screen: SampleScreen,
  },
});

const TabScreens = createBottomTabNavigator(
  {
    Home: {
      screen: stackNavigator2,
    },
    Page: {
      screen: stackNavigator,
    },
    SampleCounter: {
      screen: SampleScreen,
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: '#cccccc' }} />
    ),
  }
);

const AppStackNavigator = TabScreens;


export default AppStackNavigator;

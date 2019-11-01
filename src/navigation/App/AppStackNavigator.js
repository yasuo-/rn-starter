import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import { Theme } from 'app/src/constants/';
import Icon from 'react-native-vector-icons/MaterialIcons';

// sample
import SampleScreen from 'app/src/screens/Sample/SampleScreen';
import SampleTodoScreen from 'app/src/screens/Sample/TodosScreen';


import HomeScreen from 'app/src/containers/HomeScreen';
import PageScreen from 'app/src/containers/PagesScreen';

// ActivityManage
import ActivityManageList from 'app/src/screens/App/ActivityManage/ListScreen';
import ActivityManageSearch from 'app/src/screens/App/ActivityManage/SearchPanelScreen';
import ActivityManageShowMember from 'app/src/screens/App/ActivityManage/ShowMemberScreen';


// BottomTabBar
const TabBarComponent = props => <BottomTabBar {...props} />;


const stackActivityListManageNavigator = createStackNavigator(
  {
    ActivityManage: {
      screen: ActivityManageList,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    ActivityManageSearch: {
      screen: ActivityManageSearch,
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

const stackActivityManageShowMember = createStackNavigator(
  {
    ActivityManageShowMember: {
      screen: ActivityManageShowMember,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarVisible: false
      }),
    },
  }
)

const stackActivityManageNavigator = createStackNavigator(
  {
    ActivityManage: {
      screen: stackActivityListManageNavigator,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    }
  }
)



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
    ActivityManage: {
      screen: stackActivityManageNavigator,
      navigationOptions: {
        tabBarLabel: 'ss',
        tabBarIcon: () => (
          <Icon name="home" color={Theme.COLORS.ICON} size={24} />
        ),
      },
    },
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

const AppStackNavigator = createStackNavigator({
  App: {
    screen: TabScreens,
    navigationOptions: ({ navigation }) => ({
      header: null, // header(navbarなし)
    }),
  },
  // tabNavigationの中に入れたらbottom barが消えないため分ける.
  ActivityManageShowMember: {
    screen: stackActivityManageShowMember,
    navigationOptions: ({ navigation }) => ({
      header: null, // header(navbarなし)
    }),
  }
});


export default AppStackNavigator;

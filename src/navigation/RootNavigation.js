import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// AuthLoadingScreen
import AuthLoadingScreen from 'app/src/screens/AuthLoadingScreen';

// Auth
import AuthStackNavigator from './AuthStackNavigator';

// App
import AppStackNavigator from './App/AppStackNavigator';



export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Home: AppStackNavigator,
      Auth: AuthStackNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

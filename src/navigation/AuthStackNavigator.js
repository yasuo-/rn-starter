import { createStackNavigator } from 'react-navigation-stack';

// AuthStack
import SignInScreen from 'app/src/screens/Auth/SignInScreen'


const AuthStackNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
  }
);


export default AuthStackNavigator;

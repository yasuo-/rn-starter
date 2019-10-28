import React from 'react';
import {StatusBar, StyleSheet, View, UIManager} from 'react-native';
import {AppLoading} from 'expo';
import {Provider} from 'react-redux';
import RootNavigation from './src/containers/Navigation';
import Colors from './src/constants/Colors';
import store from './src/redux/store';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    console.disableYellowBox = true;
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  _loadResourcesAsync = async () =>
    Promise.all([
      // TODO: Remove unudsed fonts to speed up application loading
      // Font.loadAsync({}),
    ]);

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };

  render() {
    // eslint-disable-next-line react/prop-types
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        // eslint-disable-next-line react/jsx-filename-extension
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.watermelon} />
          <RootNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

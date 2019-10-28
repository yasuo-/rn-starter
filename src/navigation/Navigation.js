import React from 'react';
import PropTypes from 'prop-types';
import {addNavigationHelpers} from 'react-navigation';

import AppNavigator from './RootNavigation';

export default function NavigatorView({dispatch, navigatorState}) {
  return <AppNavigator />;
}

NavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigatorState: PropTypes.shape({}).isRequired,
};

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { NavigationActions } from 'react-navigation';

import PagesScreen from 'app/src/screens/PagesScreen';

export default compose(
  connect(
    state => ({

    }),
    dispatch => ({
    }),
  ),
)(PagesScreen);

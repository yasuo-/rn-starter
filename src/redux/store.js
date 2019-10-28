import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import middleware from './middleware';
import rootReducer from './rootReducer';

const enhancers = [...getDefaultMiddleware(), ...middleware]; //[applyMiddleware(...middleware)];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store => configureStore
// const store = createStore(reducer, enhancer, autoRehydrate());
const store = configureStore({
  reducer: rootReducer,
  middleware: enhancer,
});

/*
persistStore(store, {
  storage: AsyncStorage,
  blacklist: [],
});
*/
export default store;

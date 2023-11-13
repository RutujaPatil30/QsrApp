/* eslint-disable global-require */
import 'react-native-gesture-handler/jestSetup';
import { NativeModules } from 'react-native';

import "@testing-library/jest-dom";
import '@testing-library/jest-native/extend-expect';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const globalAny: any = global;

globalAny.XMLHttpRequest = jest.fn();
globalAny.fetch = jest.fn();
globalAny.window = globalAny;
globalAny.window.navigator = {};
globalAny.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native/Libraries/LogBox/LogBox');
jest.mock(
  'react-native/Libraries/EventEmitter/NativeEventEmitter',
);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => { /* no-op */ };
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');



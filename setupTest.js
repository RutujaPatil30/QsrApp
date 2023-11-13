import "@testing-library/jest-dom";
import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => { };
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native-animatable', () => {
  return {
    createAnimatableComponent: jest.fn().mockImplementation((comp) => comp),
    View: 'AnimatableView',
  };
});

jest.mock('react-native-simple-toast', () => {
  return {
    show: jest.fn(),
  };
});

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({ children }) => <>{children}</>,
  };
});

jest.mock('react-native/Libraries/Image/Image', () => ({
  ...jest.requireActual('react-native/Libraries/Image/Image'),
  resolveAssetSource: () => ({ uri: './src/assets/breakfast.png' }),
}));

jest.mock('react-native', () => {
  const RealComponent = jest.requireActual('react-native');
  RealComponent.TouchableOpacity = jest.fn().mockImplementation(({ children, ...props }) => {
      return <RealComponent.View {...props}>{children}</RealComponent.View>;
  });
  return RealComponent;
});



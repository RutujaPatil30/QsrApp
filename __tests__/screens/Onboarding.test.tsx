
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import OnboardingScreen from '../../src/screens/OnboardingScreen/OnboardingScreen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';

describe('Checking OnboardingScreen ', () => {
  it('should render the text "OTPScreen" ', () => {

    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <OnboardingScreen navigation={undefined} />
        </NavigationContainer>
      </Provider>
    );
    render(component);
    const nextButton = screen.getByTestId('OnboardingScreen_NextButton');
    expect(nextButton).toBeTruthy();
  });
});

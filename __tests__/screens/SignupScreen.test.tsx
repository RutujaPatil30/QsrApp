import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignupScreen from '../../src/screens/SignupScreen/SignupScreen';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
let store;

describe('SignupScreen', () => {
  beforeEach(() => {
    
    store = mockStore({
      reducer: {
        users: [],
      },
    });
  });

  it('renders correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SignupScreen />
      </Provider>
    );

    expect(getByTestId('SignupScreen_NameInputField')).toBeTruthy();
    expect(getByTestId('SignupScreen_EmailInputField')).toBeTruthy();
    expect(getByTestId('SignupScreen_PhoneInputField')).toBeTruthy();
    expect(getByTestId('SignupScreen_PasswordInputField')).toBeTruthy();
    expect(getByTestId('SignupScreen_ConfirmPasswordFiels')).toBeTruthy();
    expect(getByTestId('SignuScreen_NextButton')).toBeTruthy();

  });

  it('submits the form with correct data', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SignupScreen />
      </Provider>
    );

    fireEvent.changeText(getByTestId('SignupScreen_NameInputField'), 'John Doe');
    fireEvent.changeText(getByTestId('SignupScreen_EmailInputField'), 'john@example.com');
    fireEvent.changeText(getByTestId('SignupScreen_PhoneInputField'), '1234567890');
    fireEvent.changeText(getByTestId('SignupScreen_PasswordInputField'), 'password123');
    fireEvent.changeText(getByTestId('SignupScreen_ConfirmPasswordFiels'), 'password123');

    fireEvent.press(getByTestId('SignuScreen_NextButton'));

    // Add your assertions here
    // For example, you can check if the navigation function was called
    // or if the correct action was dispatched to the store
  });
});

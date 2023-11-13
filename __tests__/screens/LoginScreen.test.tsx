// LoginScreen.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LoginScreen from '../../src/screens/LoginScreen/LoginScreen';

const mockStore = configureStore([]);

const store = mockStore({
    reducer: {
        users: [
            { email: 'test@example.com', password: 'password@123' },
        ],
    },
});

describe('LoginScreen', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        );

        expect(getByTestId('LoginScreen_EmailInputField')).toBeTruthy();
        expect(getByTestId('LoginScreen_PasswordInputField')).toBeTruthy();
        expect(getByTestId('LoginScreen_NextButton')).toBeTruthy();
    });

    it('submits the form with correct credentials', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <LoginScreen />
            </Provider>
        );

        fireEvent.changeText(getByTestId('LoginScreen_EmailInputField'), 'test@example.com');
        fireEvent.changeText(getByTestId('LoginScreen_PasswordInputField'), 'password123');
        fireEvent.press(getByTestId('LoginScreen_NextButton'));

    })

})
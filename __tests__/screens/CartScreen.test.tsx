import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CartScreen from '../../src/Screens/CartScreen/CartScreen';
import '@testing-library/jest-native/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);

const initialState = {
    reducer: {
        cartItems: [
            {
                id: 9,
                title: 'McFlurry Oreo',
                description:
                    'Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven.',
                image: require('../../src/assets/breakfast.png'),
                price: 10.0,
                qty: 1,
            },
            {
                id: 10,
                title: 'Hot Fudge',
                description:
                    'A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge.',
                image: require('../../src/assets/breakfast.png'),
                price: 15.0,
                qty: 1,
            },
        ],
        totalItems: 2,
        totalPrice: 25.0,
    },
};

const store = mockStore(initialState);

describe('Checking Cart Screen', () => {
    it('should render the expected UI elements', () => {
        render(
            <Provider store={store}>
                <CartScreen />
            </Provider>
        );

        const cartProduct = screen.queryAllByTestId("CartScreen_CartProduct");
        const cartButton = screen.getByTestId('CartScreen_NextButton');

        expect(cartProduct.length).toBeGreaterThan(0);
        expect(cartButton).toBeTruthy();
    });

    it('should display the correct total price', () => {
        render(
            <Provider store={store}>
                <CartScreen />
            </Provider>
        );

        const totalPriceText = screen.getByTestId('CartScreen_TotalPrice');
        expect(totalPriceText.props.children.join('')).toBe('Rs 25');
    });

});

describe('CartScreen Snapshot Test', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Provider store={store}>
                <CartScreen />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
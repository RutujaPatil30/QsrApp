import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CustomCartElement from '../../src/components/CustomCartElement/CustomCartElement'; // Update the import path as needed
import { add_to_cart_request, delete_cart_item_request, remove_from_cart_request } from '../../src/redux/action';

const mockStore = configureStore([]);
const store = mockStore({ /* initial state */ });

describe('CustomCartElement', () => {
    const defaultProps = {
        itemImage: { uri: 'test-uri' },
        itemName: 'Test Item',
        itemPrice: 100,
        itemQty: 1,
        itemId: 1,
        testID: 'test-custom-cart-element'
    };

    it('renders correctly', () => {
        const { getByTestId, getByText } = render(
            <Provider store={store}>
                <CustomCartElement {...defaultProps} />
            </Provider>
        );

        expect(getByTestId('test-custom-cart-element')).toBeTruthy();
        expect(getByText('Test Item')).toBeTruthy();
        expect(getByText('1')).toBeTruthy(); // for quantity
        expect(getByText('Rs. 100')).toBeTruthy(); // for price
    });

    it('increases item quantity on press', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <CustomCartElement {...defaultProps} />
            </Provider>
        );

        const increaseButton = getByTestId('IncreaseButton'); 
        fireEvent.press(increaseButton);
        expect(store.getActions()).toContainEqual(add_to_cart_request({ id: 1 }));
    });

    it('deletes item on press', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <CustomCartElement {...defaultProps} />
            </Provider>
        );

        const deleteButton = getByTestId('DeleteButton'); 
        fireEvent.press(deleteButton);
        expect(store.getActions()).toContainEqual(delete_cart_item_request({ id: 1 }));
    });
});

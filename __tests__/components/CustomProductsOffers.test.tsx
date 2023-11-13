import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomProductOffers from '../../src/components/CustomProductOffers/CustomProductsOffers';

describe('<CustomProductOffers />', () => {
    const mockOnPress = jest.fn();
    const defaultProps = {
        itemImage: { uri: 'test-image' }, // Assuming this is how you pass images
        itemName: 'Test Product',
        itemPrice: 100,
        onPress: mockOnPress,
        testID: 'testID'
    };

    it('renders correctly', () => {
        const { getByTestId, getByText } = render(<CustomProductOffers {...defaultProps} />);

        expect(getByTestId('testID')).toBeTruthy();
        expect(getByText('Test Product')).toBeTruthy();
        expect(getByText('Rs 100')).toBeTruthy();
    });

    it('displays the correct item name and price', () => {
        const { getByText } = render(<CustomProductOffers {...defaultProps} />);

        expect(getByText('Test Product')).toBeTruthy();
        expect(getByText('Rs 100')).toBeTruthy();
    });

    it('calls onPress when the button is pressed', () => {
        const { getByTestId } = render(<CustomProductOffers {...defaultProps} />);

        fireEvent.press(getByTestId('CustomIconButton'));
        expect(mockOnPress).toHaveBeenCalled();
    });
});

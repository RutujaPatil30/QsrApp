import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../../src/components/CustomButton/CustomButton'; // Update the import path as needed

import { StyleSheet } from 'react-native';

const defaultStyles = {
    backgroundColor: 'gray',
    borderColor: 'black',
    textColor: 'white',
    width: 100,
    height: 40,
    fontSize: 16,
};

describe('CustomButton', () => {
    it('renders correctly with default props', () => {
        const { getByTestId } = render(<CustomButton text="Test Button" buttonStylesProps={defaultStyles} testID="test-button" />);
        expect(getByTestId('test-button')).toBeTruthy();
    });

    it('calls onPress when pressed', () => {
        const mockOnPress = jest.fn();
        const { getByTestId } = render(<CustomButton text="Test Button" onPress={mockOnPress} buttonStylesProps={defaultStyles} testID="test-button" />);
        fireEvent.press(getByTestId('test-button'));
        expect(mockOnPress).toHaveBeenCalled();
    });

    it('does not trigger onPress when disabled', () => {
        const mockOnPress = jest.fn();
        const { getByTestId } = render(<CustomButton text="Test Button" onPress={mockOnPress} disabled buttonStylesProps={defaultStyles} testID="test-button" />);
        const button = getByTestId('test-button');
        fireEvent.press(button);
        expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('applies custom styles', () => {
        const customStyles = {
            backgroundColor: 'blue',
            borderColor: 'red',
            textColor: 'green',
            width: 200,
            height: 50,
            fontSize: 20,
        };
        const { getByTestId, getByText } = render(<CustomButton text="Test Button" buttonStylesProps={customStyles} testID="test-button" />);
        const button = getByTestId('test-button');
        const buttonText = getByText('Test Button');

        // Flatten the styles to ensure they're in a single object
        const flattenedButtonStyles = StyleSheet.flatten(button.props.style);

        expect(flattenedButtonStyles).toEqual(expect.objectContaining({
            backgroundColor: 'blue',
            borderColor: 'red',
            width: 200,
            height: 50,
        }));

        const flattenedTextStyles = StyleSheet.flatten(buttonText.props.style);

        expect(flattenedTextStyles).toEqual(expect.objectContaining({
            color: 'green', 
            fontSize: 18, 
            fontWeight: 'bold', 
        }));
    });


});

// import React from 'react';
// import renderer from 'react-test-renderer';
// import CustomButton from '../../src/components/CustomButton';

// it('renders correctly', () => {
//   const tree = renderer.create(<CustomButton /* props */ />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
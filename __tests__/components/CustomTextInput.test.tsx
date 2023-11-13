import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomTextInput from '../../src/components/CustomTextInput/CustomTextInput';

describe('<CustomTextInput />', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<CustomTextInput value="" testID="CustomTextInput" />);
        expect(getByTestId('CustomTextInput')).toBeTruthy();
    });

    it('displays label when labelText prop is provided', () => {
        const labelText = 'Test Label';
        const { getByText } = render(<CustomTextInput labelText={labelText} value="" testID={'CustomTextInput'} />);
        expect(getByText(labelText)).toBeTruthy();
    });

    it('calls onChangeText with the correct value', () => {
        const mockOnChangeText = jest.fn();
        const { getByPlaceholderText } = render(
            <CustomTextInput 
                onChangeText={mockOnChangeText}
                value=""
                lablePlaceHolder="Enter text" testID={'CustomTextInput'}            />
        );

        fireEvent.changeText(getByPlaceholderText('Enter text'), 'New text');
        expect(mockOnChangeText).toHaveBeenCalledWith('New text');
    });

});

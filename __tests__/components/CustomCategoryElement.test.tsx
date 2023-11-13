import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomCategoryElements from '../../src/components/CustomCategoryElements/CustomCategoryElements'; // Adjust the import path as necessary

describe('<CustomCategoryElements />', () => {
  const mockOnPress = jest.fn();
  const mockOnPressAdd = jest.fn();
  const mockProps = {
    itemImage:  require('../../src/assets/breakfast.png'),
    itemName: 'Test Item',
    itemPrice: 100,
    itemDescription: 'This is a test description',
    onPress: mockOnPress,
    onPressAdd: mockOnPressAdd,
    testID: 'testID'
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<CustomCategoryElements {...mockProps} />);
    
    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('Rs 100')).toBeTruthy();
    expect(getByText('This is a test description')).toBeTruthy();
    expect(getByTestId('testID')).toBeTruthy();
  });

  it('calls onPress when the TouchableOpacity is pressed', () => {
    const { getByTestId } = render(<CustomCategoryElements {...mockProps} />);
    
    fireEvent.press(getByTestId('testID'));
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('calls onPressAdd when the add button is pressed', () => {
    const { getByText } = render(<CustomCategoryElements {...mockProps} />);
    
    fireEvent.press(getByText('(+)'));
    expect(mockOnPressAdd).toHaveBeenCalled();
  });
});

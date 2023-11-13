import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomCategory from '../../src/components/CustomCategory/CustomCategory'; // Adjust the path as necessary

describe('CustomCategory', () => {
  it('renders correctly', () => {
    const mockProps = {
      itemImage:  require('../../src/assets/breakfast.png'),
      itemTitle: 'Test Title',
      onPress: jest.fn(),
      testID: 'custom-category-test',
    };

    const { getByTestId, getByText } = render(<CustomCategory {...mockProps} />);
    
    expect(getByTestId(mockProps.testID)).toBeTruthy();
    expect(getByText(mockProps.itemTitle)).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockProps = {
      itemImage:  require('../../src/assets/breakfast.png'),
      itemTitle: 'Test Title',
      onPress: jest.fn(),
      testID: 'custom-category-test',
    };

    const { getByTestId } = render(<CustomCategory {...mockProps} />);
    const touchable = getByTestId(mockProps.testID);

    fireEvent.press(touchable);

    expect(mockProps.onPress).toHaveBeenCalled();
  });
});

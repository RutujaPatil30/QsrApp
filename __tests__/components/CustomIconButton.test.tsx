import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomIconButton from '../../src/components/CustomIconButton/CustomIconButton';

describe('CustomIconButton', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CustomIconButton iconName="arrow-right" text="Click Me" disabled={false} testID={'CustomIconButton'} />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('does not call onPress when disabled is true', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CustomIconButton iconName="arrow-right" text="Click Me" onPress={onPressMock} disabled={true} testID="CustomIconButton" />
    );
    fireEvent.press(getByTestId('CustomIconButton'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomIconButton iconName="arrow-right" text="Click Me" onPress={onPressMock} disabled={false} testID={'CustomIconButton'} />);
    fireEvent.press(getByText('Click Me'));
    expect(onPressMock).toHaveBeenCalled();
  });

});

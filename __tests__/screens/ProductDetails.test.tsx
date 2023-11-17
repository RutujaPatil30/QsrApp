
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import ProductDetailsScreen from '../../src/screens/ProductDetailsScreen/ProductDetailsScreen';
import { NavigationContainer} from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import renderer from 'react-test-renderer';

describe('Checking ProductDetailsScreen ', () => {
  it('should render the UI "ProductDetailsScreen" ', () => {

    const mockNavigation = {
      navigate: jest.fn(),
      goBack: jest.fn(),
    };

    const mockRoute = {
      params: {
        id: '123',
        name: 'Big Mac',
        price: '5.99',
        description: 'A big, tasty burger with two beef patties and special sauce.',
        image: require('../../src/assets/breakfast.png'),
        
      },
    };

    const component = (
      <Provider store={store}>
        <NavigationContainer>
          <ProductDetailsScreen navigation={mockNavigation} route={mockRoute} />
        </NavigationContainer>
      </Provider>
    );
    render(component);

    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();

    const inputField = screen.getByTestId('ProductDetailsScreen_InputField');
    const nextButton = screen.getByTestId('ProductDetailsScreen_NextButton');
    const productAnimation = screen.getByTestId('ProductDetailsScreen_Animation');

    expect(nextButton).toBeTruthy();
    expect(inputField).toBeTruthy();
    expect(productAnimation).toBeTruthy();

  });

});

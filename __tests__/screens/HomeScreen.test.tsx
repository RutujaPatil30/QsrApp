import React from 'react';
import { render, screen } from '@testing-library/react-native';
import HomeScreen from '../../src/Screens/HomeScreen/HomeScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

const mockStore = configureStore([]);
const store = mockStore({
    //states
});

describe('Checking Home Screen', () => {
  it('should render the expected UI elements', () => {
    render(<Provider store={store}>
        <HomeScreen />
      </Provider>);
  
    const locationDropdown = screen.getByTestId('HomeScreen_LocationDropdown');
    const productSearchbar = screen.getByTestId('HomeScreen_ProductSearchbar');
    const carousel = screen.getByTestId('HomeScreen_Carousel')
    const productCategories = screen.getAllByTestId('HomeScreen_ProductCategory');
    const productOffers = screen.getAllByTestId('HomeScreen_ProductOffers');
  
         
    expect(locationDropdown).toBeTruthy();
    expect(productSearchbar).toBeTruthy();
    expect(carousel).toBeTruthy();
    expect(productCategories).toHaveLength(4);
    expect(productOffers.length).toBeGreaterThan(0);
  });
});

describe('HomeScreen Snapshot Test', () => {
  it('renders correctly', () => {
      const tree = renderer.create(
          <Provider store={store}>
              <HomeScreen />
          </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });
});
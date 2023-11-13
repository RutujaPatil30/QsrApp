
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import SpecialOffersScreen from '../../src/Screens/SpecialOffersScreen/SpecialOffersScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const store = mockStore({
  
});

describe('Checking Special Offers Screen ', () => {
    it('should render the expected UI elements', async () => {
        render(
          <Provider store={store}>
            <SpecialOffersScreen />
          </Provider>
        );
      
        const productsOffers = await screen.findAllByTestId('SpecialOffersScreen_Products');
      
        expect(productsOffers.length).toBeGreaterThan(0);
      });
});

import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CategoryScreen from '../../src/Screens/CategoryScreen/CategoryScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
const store = mockStore({
    reducer: {
        cartItems: [], 
    },
});

const mockRoute = {
    params: {
      title: 'Breakfast', 
    },
  }

describe('Checking Category Screen ', () => {
    it('should render the expected UI elements', async () => {
        render(
          <Provider store={store}>
            <CategoryScreen route={mockRoute}  />
          </Provider>
        );
      
        const categoryElements = await screen.findAllByTestId('CategoryScreen_Elements');
      
        expect(categoryElements.length).toBeGreaterThan(0);
      });
});
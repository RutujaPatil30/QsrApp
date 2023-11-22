/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {create, act} from 'react-test-renderer';

describe('<App /> Basics', () => {
  it('has 1 child', async () => {
    let tree:any
    act(()=>{
       tree = create(<App />)
    })
    expect(tree.toJSON().children.length).toBe(1);
  });
})

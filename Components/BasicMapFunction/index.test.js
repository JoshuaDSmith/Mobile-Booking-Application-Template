import React from 'react';
import renderer from 'react-test-renderer';
import response from './index';

console.log(response);
expect(response.map(obj => obj.label)).toEqual(
  expectedResult.map(obj => obj.label),
);

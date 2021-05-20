'use strict';
const inserstionSort = require('../index.js');

describe('should test insertion arrays', () => {
  it('should test inserstion sort fucntion', () => {
    let inputArr = [8, 4, 23, 16, 42, 15];
    inserstionSort(inputArr);
    expect(inputArr).toEqual([4, 8, 15, 16, 23, 42]);
    console.log(inputArr);
  });
});
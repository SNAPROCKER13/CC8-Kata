const { describe, it, expect } = require('@jest/globals')
const findOrderedCount = require('./main')

describe('Ordered count', function() {
  it(`When input 'Racecar' should return [['R', 1], ['a', 2], ['c', 2], ['e', 1], ['r', 1]]`, () => {
    expect(findOrderedCount('Racecar')).toEqual([['R', 1], ['a', 2], ['c', 2], ['e', 1], ['r', 1]])
  })
  it(`When input 'John Wick' should return [['J', 1], ['o', 1], ['h', 1], ['n', 1], [' ', 1], ['W', 1], ['i', 1], ['c', 1], ['k', 1]]`, () => {
    expect(findOrderedCount('John Wick')).toEqual([['J', 1], ['o', 1], ['h', 1], ['n', 1], [' ', 1], ['W', 1], ['i', 1], ['c', 1], ['k', 1]])
  })
  it(`When input '771301391147' should return [['7', 3], ['1', 4], ['3', 2], ['0', 1], ['9', 1], ['4', 1]]`, () => {
    expect(findOrderedCount('Racecar')).toEqual([['R', 1], ['a', 2], ['c', 2], ['e', 1], ['r', 1]])
  })
  it(`When input '' should return []`, () => {
    expect(findOrderedCount('')).toEqual([])
  })
  it(`When input kk should return [['k', 2]]`, () => {
    expect(findOrderedCount('kk')).toEqual([['k', 2]])
  })
  it(`When input k should return [['k', 1]]`, () => {
    expect(findOrderedCount('k')).toEqual([['k', 1]]);
  });
  it(`When input kK should return [['k', 1], ['K', 1]`, () => {
    expect(findOrderedCount('kK')).toEqual([['k', 1], ['K', 1]]);
  });
})

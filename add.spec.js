const add = require('./add.js')

test('adds two numbers together', () => {
  expect(add(1, 2)).toBe(3)
})

test('adds two different numbers together', () => {
  expect(add(4, 6)).toBe(10)
})

test('if I dont provide two integers it will error', () =>  {
  expect(add('', '')).toBe('You must provide two numbers')
})
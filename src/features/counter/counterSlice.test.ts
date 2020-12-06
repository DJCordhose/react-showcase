import counterReducer from './counterSlice';
import {
  decrement,
  increment
} from './counterSlice';

test('reducer increments', () => {
  const {value} = counterReducer({
    value: 0
  }, increment);
  expect(value).toBe(1);
});

test('reducer decrements', () => {
  const {value} = counterReducer({
    value: 1
  }, decrement);
  expect(value).toBe(0);
});


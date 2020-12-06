import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { Counter } from "./Counter";

// https://react.i18next.com/misc/testing
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

test('smoke: renders something', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  expect(getAllByText(/add/i)).toHaveLength(2);
});

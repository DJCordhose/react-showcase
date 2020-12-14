import { screen } from '@testing-library/testcafe'

fixture `App Browser Test using Testing Library`
    .page `http://localhost:3000`;

// version using testid
// const valueEl = screen.getByTestId('count:value');
// const incrementBtn = screen.getByTestId('count:increment');
// const decrementBtn = screen.getByTestId('count:decrement');

const valueEl = screen.getByRole('presentation');
const incrementBtn = screen.getByLabelText('Increment value');
const decrementBtn = screen.getByLabelText('Decrement value');

test('increase', async t => {

    await t.expect(valueEl.innerText).eql('0');
    await t.click(incrementBtn);
    await t.expect(valueEl.innerText).eql('1');

});

test('decrease', async t => {
    const initialValue = Number(await valueEl.innerText)
    await t.expect(initialValue).eql(0);
    await t.click(decrementBtn);
    const newValue = Number(await valueEl.innerText)
    await t.expect(newValue).eql(initialValue - 1);

});


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
const amountInput = screen.getByLabelText('Set increment amount')
const addAmountBtn = screen.getByLabelText('Add Amount (sync)');
const addAmountBtnAsync = screen.getByLabelText('Add Amount (async)');

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

// uses screenshot to understand what is going on
// https://devexpress.github.io/testcafe/documentation/guides/advanced-guides/screenshots-and-videos.html
test('add amount', async t => {
    const increment = 9;
    const initialValue = Number(await valueEl.innerText)

    await t.takeElementScreenshot(valueEl);
    await t.expect(initialValue).eql(0);
    // this is needed in order not to add the 9, but replace existing text 
    // await t.selectText(amountInput).pressKey("delete");
    // or at least
    await t.selectText(amountInput);
    await t.typeText(amountInput, String(increment));
    await t.click(addAmountBtn);
    await t.takeElementScreenshot(valueEl);
    const newValue = Number(await valueEl.innerText)
    await t.expect(newValue).eql(initialValue + increment);

    await t.takeScreenshot();
});


test('add amount async', async t => {
    const increment = 9;
    const initialValue = Number(await valueEl.innerText)

    await t.expect(initialValue).eql(0);
    await t.selectText(amountInput);
    await t.typeText(amountInput, String(increment));
    await t.click(addAmountBtnAsync);

    await t.wait(1500);

    const newValue = Number(await valueEl.innerText)
    await t.expect(newValue).eql(initialValue + increment);
});
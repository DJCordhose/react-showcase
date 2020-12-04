import { Selector } from 'testcafe';

fixture `App Browser Test`
    .page `http://localhost:3000`;

const valueEl = Selector("[aria-label='Value']");
const incrementBtn = Selector("[aria-label='Increment value']");
const decrementBtn = Selector("[aria-label='Decrement value']");

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

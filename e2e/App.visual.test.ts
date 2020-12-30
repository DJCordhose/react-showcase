import { takeSnapshot } from 'testcafe-blink-diff';

fixture `App Visual Regression Test`
    .page `http://localhost:3000`;

test("start", async t => {
  await takeSnapshot(t);
});

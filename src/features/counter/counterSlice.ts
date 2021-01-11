import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

type Operation = 'LOAD' | 'ADD_ASYNC'

interface CounterState {
  value: number;
  operationInProgress: Partial<Record<Operation,boolean>>;
}

const initialState: CounterState = {
  value: 0,
  operationInProgress: {
  }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    startOperation: (state, action: PayloadAction<Operation>) => {
      state.operationInProgress[action.payload] = true;
    },
    endOperation: (state, action: PayloadAction<Operation>) => {
      state.operationInProgress[action.payload] = false;
    },
  },
});

export const { increment, decrement, incrementByAmount, setValue, startOperation, endOperation } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => dispatch => {
  dispatch(startOperation('ADD_ASYNC'));
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
    dispatch(endOperation('ADD_ASYNC'));
  }, 1000);
};

export const loadFromServer = (): AppThunk => async dispatch => {
  dispatch(startOperation('LOAD'));
  try {
    const response = await fetch("/api/users.json");
    const json = await response.json();
    dispatch(setValue(json.count));
  } catch (error) {
    console.error("Fetch failed", error);
  } finally {
    dispatch(endOperation('LOAD'));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
export const selectInProgress = (state: RootState) => state.counter.operationInProgress;

export default counterSlice.reducer;

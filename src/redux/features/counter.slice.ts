import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 1,
    input: '0'
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.counter += 1 },
        decrement: (state) => { state.counter -= 1 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        reset: (state) => { 
            state.counter = 0;
            state.input = '0';
        },
        setInput: (state, action: PayloadAction<string>) => { 
            state.input = action.payload
        }
    }
});

export const { 
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
    setInput
} = counterSlice.actions;

export default counterSlice.reducer;
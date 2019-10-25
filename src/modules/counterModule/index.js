import { createSlice } from "redux-starter-kit";


const CounterModule = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
      increment: state => state + 1,
      decrement: state => state - 1
  }
});

export const { increment, decrement } = CounterModule.actions;

export default CounterModule;


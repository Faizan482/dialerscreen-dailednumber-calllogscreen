
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialerState {
  dialedNumber: string;
  callHistory:string[];
}

const initialState: DialerState = {
  dialedNumber: '',
  callHistory:[]
};

const dialerSlice = createSlice({
  name: 'dialer',
  initialState,
  reducers: {
    setDialedNumber: (state, action: PayloadAction<string>) => {
      state.dialedNumber = action.payload;
    },
    resetDialedNumber: (state) => {
      state.dialedNumber = '';
    },
    addToCallHistory:(state,action)=>{
      state.callHistory.push(action.payload)
    }
  },
});

export const { setDialedNumber, resetDialedNumber,addToCallHistory } = dialerSlice.actions;
export default dialerSlice.reducer;
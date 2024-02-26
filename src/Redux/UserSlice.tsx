import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  name: string;
  age: number;
  
}

const userSlice = createSlice({
  name: 'user',
  initialState: [] as User[],
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;

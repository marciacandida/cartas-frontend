import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: "";
  username: string;
  email: string;
}

const initialState = {
  id: "",
  name: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state: any, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.username;
      state.email = action.payload.email;
    },
    setSignOutState: (state: any) => {
      state.username = null;
      state.id = null;
    },
  },
});
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserId = (state: any) => state.user.id;
export const selectUserName = (state: any) => state.user.name;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;

export default userSlice.reducer;

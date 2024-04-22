import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: "";
  firstMame: string;
  lastMame: string;
  email: string;
}

const initialState = {
  id: "",
  firstMame: "",
  lastMame: "",
  email: "",
  photo: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state: any, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.firstMame = action.payload.firstMame;
      state.lastMame = action.payload.lastMame;
      state.email = action.payload.email;
    },
    setSignOutState: (state: any) => {
      state.lastMame = null;
      state.email = null;
      state.firstName = null;
      state.id = null;
    },
  },
});
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserId = (state: any) => state.user.id;
export const selectUserName = (state: any) =>
  state.user.firstMame + " " + state.user.lastMame;
export const selectUserEmail = (state: any) => state.user.email;
export const selectUserPhoto = (state: any) => state.user.photo;

export default userSlice.reducer;

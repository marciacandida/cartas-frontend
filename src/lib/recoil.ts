import { atom } from "recoil";

export const MenuState = atom({
  key: "menuState",
  default: false,
});
export const MinutesState = atom({
  key: "minutesState",
  default: 0,
});

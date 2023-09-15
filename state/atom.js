import { atom } from "recoil";

export const searchQueryState = atom({
  key: "searchQueryState",
  default: [],
});

export const sideBarStatus = atom({
  key: "sideBarStatus",
  default: true,
});

export const recommendationsData = atom({
  key: "recommendationsData",
  default: [],
});

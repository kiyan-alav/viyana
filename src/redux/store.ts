import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import testSlice from "@/redux/slice/TestSlice";

const store = configureStore({
  reducer: { testSlice },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { createSlice } from "@reduxjs/toolkit";

// Init Slice
const initState = { value: false, colorValue: "" };

const toggleSlice = createSlice({
	name: "toggle",
	initialState: initState,
	reducers: {
		toggleClass: (state) => {
			state.value = !state.value;
		},
		changeColor: (state, action) => {
			state.colorValue = action.payload;
		},
	},
});

export const { toggleClass, changeColor } = toggleSlice.actions;

export default toggleSlice.reducer;

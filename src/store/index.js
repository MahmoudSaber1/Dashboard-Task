import { configureStore } from "@reduxjs/toolkit";
import toggle from "./LightboxSlices/Toggle";

export default configureStore({
	reducer: {
		toggle,
	},
});

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { DashboardRoutes } from "./routes/DashboardRoutes";

const router = createBrowserRouter([DashboardRoutes]);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;

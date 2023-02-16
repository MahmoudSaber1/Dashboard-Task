import { DashboardLayout, NotFound } from "../container";
import {
	Users,
	Clients,
	DashboardIndex,
	Upload,
	UploadImage,
	Catalogues,
	Products,
} from "../pages";

export const DashboardRoutes = {
	path: "/",
	element: <DashboardLayout />,
	errorElement: <NotFound />,
	children: [
		{
			index: true,
			element: <DashboardIndex />,
		},
		{
			path: "users",
			element: <Users />,
		},
		{
			path: "clients",
			element: <Clients />,
		},
		{
			path: "upload",
			element: <Upload />,
		},
		{
			path: "upload-image",
			element: <UploadImage />,
		},
		{
			path: "catalog",
			element: <Catalogues />,
		},
		{
			path: "product",
			element: <Products />,
		},
	],
};

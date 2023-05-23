import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Spin } from "antd";
import loadModule from "../shared/libs/utils/helpers";
import Main from "../pages/Main";

const Aodb = React.lazy(() => loadModule(() => import("Aodb")));
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/aodb",
				element: (
					<React.Suspense
						fallback={
							<div style={{ width: "100%" }}>
								<Spin tip="Загрузка..." size="large">
									<div />
								</Spin>
							</div>
						}
					>
						<Aodb />
					</React.Suspense>
				),
			},
		],
	},
	// ErrorBoundary:
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} fallbackElement={<div>Ничё не загрузилось(</div>}>
		<Main />
	</RouterProvider>
);

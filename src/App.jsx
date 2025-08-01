import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayout from "./pages/PageLayout";

const router = createBrowserRouter([
        {
                path: "/",
                element: <PageLayout />,
                errorElement: <NotFoundPage />,
                children: [
                        {
                                index: true,
                                element: <Home />,
                        },
                ],
        },
]);

export default function App() {
        return <RouterProvider router={router} />;
}

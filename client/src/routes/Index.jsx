import React from "react";
import {
    createBrowserRouter, RouterProvider,
    Outlet, Navigate
} from "react-router-dom";

import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Index = () => {

    const Layout = () => {
        return (
            <div className="w-full h-[100dvh] bg-slate-200">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/*",
                    element: <Error />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Index;
import AddService from "../pages/AddService";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/ErrorPage";
import MyReview from "../pages/MyReview";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home");
const { default: Login } = require("../pages/Login");
const { default: Services } = require("../pages/Services");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: '/services/:id',
                loader: async ({ params }) => await fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview /></PrivateRoute>
            }
        ]
    }
]);

export default router;
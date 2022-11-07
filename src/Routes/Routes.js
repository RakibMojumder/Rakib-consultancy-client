const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/Home");
const { default: Login } = require("../pages/Login");
const { default: Services } = require("../pages/Services");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: '/services',
                element: <Services />
            }
        ]
    }
]);

export default router;
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import About from '../pages/About'; 
import Projects from '../components/Projects/Projects';

const routes = createBrowserRouter([

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
                path: '/about',
                element: <About></About>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            }
        ]
    }
])

export default routes;

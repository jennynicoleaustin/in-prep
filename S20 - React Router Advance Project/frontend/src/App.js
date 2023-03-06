import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/RootLayout";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EditEventPage from "./pages/EditEvent";
import NewEventPage from "./pages/NewEvent";
import EventDetailPage from "./pages/EventDetail";
import EventsRootLayout from "./pages/EventsRootLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'events',
                element: <EventsRootLayout />,
                children: [
                    { index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    { path: ':eventId', element: <EventDetailPage /> },
                    { path: 'new', element: <NewEventPage /> },
                    { path: ':eventId/edit', element: <EditEventPage /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
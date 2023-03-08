import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage"
import RootLayout from "./pages/RootLayout";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import EditEventPage from "./pages/EditEvent";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EventDetailPage, {
    loader as eventDetailLoader,
    action as deleteEventAction
} from "./pages/EventDetail";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {
                path: 'events',
                element: <EventsRootLayout/>,
                children: [
                    {
                        index: true,
                        element: <EventsPage/>,
                        loader: eventsLoader,
                    },
                    {
                        path: ':eventId',
                        loader: eventDetailLoader,
                        id: 'event-detail',
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage/>,
                                action: deleteEventAction
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage/>
                            },
                        ]
                    },

                    {path: 'new', element: <NewEventPage/>, action: newEventAction },

                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {

    const eventsData = useLoaderData()
    const events = eventsData.events

    return (
        <>
            {<EventsList events={events}/>}
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // ...
    } else {
        return response;
    }
}
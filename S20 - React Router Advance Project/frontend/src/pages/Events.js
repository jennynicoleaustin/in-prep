import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {

    const eventsData = useLoaderData()

    return (
        <>
            {<EventsList events={eventsData}/>}
        </>
    );
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // ...
    } else {
        const resData = await response.json();
        return resData.events;
    }
}
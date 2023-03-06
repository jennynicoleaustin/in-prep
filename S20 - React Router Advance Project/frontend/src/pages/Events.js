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
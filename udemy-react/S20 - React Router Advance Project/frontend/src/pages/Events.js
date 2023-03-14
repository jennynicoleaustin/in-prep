import EventsList from '../components/EventsList';
import {Await, defer, json, useLoaderData} from "react-router-dom";
import {Suspense} from "react";

function EventsPage() {

    const {events} = useLoaderData()

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>

    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // throw new Response(JSON.stringify({message: 'Could not fetch events.'}), {status: 500});
        return json(
            {message: 'Could not fetch events.'},
            {status: 500}
        )
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents() // for defer to work you must have a value that will return a promise -- so that it has something to defer
    })
}
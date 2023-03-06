import {Link, useParams} from "react-router-dom";

function EventDetailPage() {
    const params = useParams()

    return (
        <>
            <h1>Event Details Page</h1>
        <p>Event id={params.eventId}</p>
            <p><Link to=".." relative='path'>Back to Events</Link></p>
        </>
    )
}
export default EventDetailPage;
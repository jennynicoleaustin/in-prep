import {Link} from "react-router-dom";

const DUMMY_EVENTS = [
    {id:"1", title:'Birthday Party'},
    {id:"2", title:'Anniversary Party'},
    {id:"3", title:'Retirement Party'},
    {id:"4", title:'Baby Shower'},
]
function EventsPage() {
    return (
        <>
            <h1>Events Page</h1>
            <ul>
                <li>
                    <Link to="1">Test Event</Link>
                </li>
                {DUMMY_EVENTS.map((event) =>
                    (<li key={event.id}>
                        <Link to={event.id}>{event.id} {event.title}</Link>
                    </li>)
                        )}
            </ul>
        </>
    )
}
export default EventsPage;
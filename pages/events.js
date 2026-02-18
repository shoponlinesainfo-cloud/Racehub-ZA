import { useEffect, useState } from "react";
import axios from "axios";

export default function Events(){
  const [events,setEvents]=useState([]);

  useEffect(()=>{
    axios.get('/api/events').then(res=>setEvents(res.data));
  },[]);

  return(
    <div style={{padding:40}}>
      <h2>Events</h2>
      {events.map(e=>(
        <div key={e._id}>
          <h3>{e.title}</h3>
          <p>{new Date(e.date).toDateString()}</p>
        </div>
      ))}
    </div>
  )
}
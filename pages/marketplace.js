import { useEffect, useState } from "react";
import axios from "axios";

export default function Marketplace(){
  const [listings,setListings]=useState([]);

  useEffect(()=>{
    axios.get('/api/marketplace').then(res=>setListings(res.data));
  },[]);

  return(
    <div style={{padding:40}}>
      <h2>Marketplace</h2>
      {listings.map(l=>(
        <div key={l._id}>
          <h3>{l.title}</h3>
          <p>R{l.price}</p>
        </div>
      ))}
    </div>
  )
}
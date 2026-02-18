import Link from "next/link";

export default function Home() {
  return (
    <div style={{padding:40}}>
      <h1>🏁 RaceHub ZA</h1>
      <p>Western Cape Motorsport Platform</p>
      <Link href="/register">Register</Link> | 
      <Link href="/login"> Login</Link> | 
      <Link href="/dashboard"> Dashboard</Link> | 
      <Link href="/marketplace"> Marketplace</Link> | 
      <Link href="/events"> Events</Link>
    </div>
  );
}
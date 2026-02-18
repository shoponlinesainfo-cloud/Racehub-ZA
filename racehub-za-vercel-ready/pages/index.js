import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1>🏁 RaceHub ZA</h1>
      <p>Western Cape Motorsport Platform</p>

      <div className="links">
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}
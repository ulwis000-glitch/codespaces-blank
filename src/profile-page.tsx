import { Link } from 'react-router-dom'
import { ArrowRight, LogOut, Settings2, ShoppingBag } from 'lucide-react'
import type { User } from './types'

type ProfileState = { session: User | null; logout: () => void }

export default function ProfilePage({ state }: { state: ProfileState }) {
  if (!state.session) return <main className="simple-page profile-page">
    <div className="section-label">Your account</div>
    <h1>Your cLink <em>Profile</em></h1>
    <p className="muted">Sign in to manage your profile, orders, and store.</p>
    <div className="profile-actions"><Link className="primary-button" to="/login">Sign in <ArrowRight size={16} /></Link><Link className="outline-button" to="/register">Create account</Link></div>
  </main>

  return <main className="simple-page profile-page">
    <div className="section-label">Your account</div>
    <h1>Your cLink <em>Profile</em></h1>
    <section className="profile-summary"><div className="profile-avatar"><ShoppingBag size={22} /></div><div><h2>{state.session.name}</h2><p>{state.session.email}</p><span>{state.session.roles.join(' · ')}</span></div></section>
    <div className="profile-actions"><Link className="outline-button" to="/buyer/orders">Orders <ArrowRight size={15} /></Link><Link className="outline-button" to="/settings"><Settings2 size={15} /> Settings</Link><button className="outline-button" onClick={state.logout}><LogOut size={15} /> Log out</button></div>
  </main>
}

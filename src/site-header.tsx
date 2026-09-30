import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MessageCircle, Search, Settings2, ShoppingCart, X } from 'lucide-react'
import type { CartItem, Product, Store, User } from './types'

type HeaderState = {
  products: Product[]
  stores: Store[]
  cart: CartItem[]
  session: User | null
  logout: () => void
}

export default function SiteHeader({ state }: { state: HeaderState }) {
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const term = query.toLowerCase().trim()
  const products = state.products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(term)).slice(0, 4)
  const stores = state.stores.filter((store) => `${store.name} ${store.location}`.toLowerCase().includes(term)).slice(0, 2)
  const categories = Array.from(new Set(state.products.map((product) => product.category))).filter((category) => category.toLowerCase().includes(term)).slice(0, 2)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const search = (value: string) => {
    setQuery(value)
    setMenuOpen(false)
    navigate(`/products?search=${encodeURIComponent(value)}`)
  }

  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="topbar">
      <div className="nav-inner">
        <Link to="/" className="brand" aria-label="cLink home">
          <span className="brand-mark"><span aria-hidden="true" /></span>
          <span className="brand-wordmark"><span className="brand-c">c</span><span className="brand-link">Link</span></span>
        </Link>
        <form className="search-box" role="search" onSubmit={(event) => { event.preventDefault(); search(query) }}>
          <button type="submit" className="search-submit" aria-label="Search"><Search size={19} /></button>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, stores, or categories" aria-label="Search products, stores, or categories" />
          {term && (products.length > 0 || stores.length > 0 || categories.length > 0) && <div className="search-suggestions">
            {products.map((product) => <button type="button" key={product.id} onMouseDown={() => search(product.name)}><Search size={13} />{product.name}</button>)}
            {stores.map((store) => <button type="button" key={store.id} onMouseDown={() => search(store.name)}><Search size={13} />{store.name}</button>)}
            {categories.map((category) => <button type="button" key={category} onMouseDown={() => search(category)}><Search size={13} />{category}</button>)}
          </div>}
        </form>
        <nav className="header-links" aria-label="Primary navigation">
          <Link to="/#explore-products">Explore</Link>
          <Link to="/#for-sellers">For Sellers</Link>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-navigation-menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} strokeWidth={2.4} /> : <Menu size={23} strokeWidth={2.6} />}
        </button>
      </div>
    </header>
    {menuOpen && <>
      <button className="sidebar-overlay" aria-label="Close navigation menu" onClick={closeMenu} />
      <aside className="nav-drawer" id="site-navigation-menu" aria-label="Site navigation">
        <div className="drawer-header">
          <Link to="/" className="brand" aria-label="cLink home" onClick={closeMenu}>
            <span className="brand-mark"><span aria-hidden="true" /></span>
            <span className="brand-wordmark"><span className="brand-c">c</span><span className="brand-link">Link</span></span>
          </Link>
          <button className="close-button" aria-label="Close menu" onClick={closeMenu}><X size={19} /></button>
        </div>
        <nav className="drawer-primary" aria-label="Main links">
          <Link className="drawer-item" to="/#explore-products" onClick={closeMenu}>Explore</Link>
          <Link className="drawer-item" to="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link className="drawer-item" to="/about" onClick={closeMenu}>About cLink</Link>
          <Link className="drawer-item" to="/profile" onClick={closeMenu}>Profile</Link>
        </nav>
        <Link className="drawer-sell" to="/seller" onClick={closeMenu}>Start Selling <span aria-hidden="true">→</span></Link>
        <div className="drawer-utilities">
          <Link className="drawer-item" to={state.session ? '/cart' : '/login'} onClick={closeMenu}><ShoppingCart size={16} />Cart{state.cart.length > 0 && <span className="drawer-count">{state.cart.length}</span>}</Link>
          <Link className="drawer-item" to={state.session ? '/buyer/orders' : '/login'} onClick={closeMenu}><MessageCircle size={16} />Messages</Link>
          <Link className="drawer-item" to="/settings" onClick={closeMenu}><Settings2 size={16} />Settings</Link>
          {state.session ? <button className="drawer-item button-link" onClick={() => { state.logout(); closeMenu() }}>Log out</button> : <Link className="drawer-item" to="/login" onClick={closeMenu}>Log in</Link>}
        </div>
      </aside>
    </>}
  </>
}

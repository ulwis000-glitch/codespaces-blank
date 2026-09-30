import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Check, Copy, Package, Share2, Sparkles, TrendingUp } from 'lucide-react'
import type { ReactNode } from 'react'
import type { Product } from './types'
import { appPath } from './data'

type HomeLandingProps = {
  products: Product[]
  copyLink: (path: string) => void
  renderProducts: (products: Product[]) => ReactNode
}

export default function HomeLanding({ products, copyLink, renderProducts }: HomeLandingProps) {
  const location = useLocation()

  useEffect(() => {
    const target = location.hash.slice(1)
    if (!target) return
    const frame = window.requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    return () => window.cancelAnimationFrame(frame)
  }, [location.hash])

  const featured = products[0]

  return <main>
    <section className="hero" aria-labelledby="home-heading">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={14} /> The simpler way to sell online</div>
        <h1 id="home-heading">Selling shouldn't<br /><em>be complicated.</em></h1>
        <p>Create a product. Copy your cLink. Share it anywhere.<br className="desktop-break" /> Your next customer is one link away.</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/seller">Start selling <ArrowRight size={17} /></Link>
          <Link className="text-button" to="/#explore-products">Explore products <ArrowRight size={16} /></Link>
        </div>
        <div className="trust-row"><div className="mini-avatars"><span>MC</span><span>AJ</span><span>RL</span><span>+</span></div><span>Join 2,400+ local sellers</span></div>
      </div>
      {featured && <div className="hero-visual">
        <div className="link-card">
          <div className="link-card-top"><span className="live-dot" /> Your product is ready to share</div>
          <div className="share-product"><img src={featured.primaryImage} alt={featured.name} /><div><small>{featured.category.toUpperCase()}</small><strong>{featured.name}</strong><span>₱{featured.price.toLocaleString()}</span></div></div>
          <div className="url-row"><span>{window.location.origin}{appPath(featured.shareableLink)}</span><button onClick={() => copyLink(featured.shareableLink)}><Copy size={15} /> Copy cLink</button></div>
        </div>
        <div className="float-note note-one"><div className="note-icon gold"><Share2 size={16} /></div><div><b>Share anywhere</b><small>Facebook · TikTok · DM</small></div></div>
        <div className="float-note note-two"><div className="note-icon green"><Check size={16} /></div><div><b>Order received!</b><small>Just now · ₱349</small></div></div>
      </div>}
    </section>
    <section className="discover everyday-section" aria-labelledby="everyday-heading">
      <div className="section-heading"><div><div className="section-label">Made for your everyday</div><h2 id="everyday-heading">Find something <em>good.</em></h2></div></div>
      {renderProducts(products.slice(0, 6))}
      <div className="steps home-steps" aria-label="How cLink works">
        <div className="section-label">How cLink works</div>
        <div className="step-grid">{[['01', 'Create', 'Add your product in a few taps.', <Package key="create" />], ['02', 'Copy', 'Get your unique cLink instantly.', <Copy key="copy" />], ['03', 'Share', 'Post it anywhere your people are.', <Share2 key="share" />], ['04', 'Sell', 'Receive orders, simply.', <TrendingUp key="sell" />]].map(([number, title, text, icon]) => <div className="step" key={String(number)}><div className="step-icon">{icon}</div><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </div>
    </section>
    <section className="discover home-marketplace" id="explore-products" aria-labelledby="explore-heading">
      <div className="section-heading"><div><div className="section-label">Explore Products</div><h2 id="explore-heading">Good finds, <em>locally.</em></h2><p className="muted">Products shared by independent local sellers.</p></div><Link className="outline-button" to="/products">View all products <ArrowRight size={16} /></Link></div>
      {renderProducts(products.slice(6, 24))}
    </section>
    <section className="discover more-products" aria-labelledby="more-products-heading">
      <div className="section-heading"><div><div className="section-label">More to discover</div><h2 id="more-products-heading">More products, <em>more local.</em></h2></div></div>
      {renderProducts(products.slice(24))}
    </section>
    <section className="seller-banner" id="for-sellers" aria-labelledby="seller-heading">
      <div><div className="section-label light">For sellers</div><h2 id="seller-heading">Turn your products into<br /><em>shareable links.</em></h2><p>Create your store, share your products, and reach customers without complicated setup.</p><Link className="light-button" to="/seller">Create your store <ArrowRight size={17} /></Link></div>
      <div className="banner-stats"><div><strong>3,842</strong><span>Products shared</span></div><div><strong>126</strong><span>Sellers</span></div><div><strong>₱24,580</strong><span>Sales generated</span></div></div>
    </section>
  </main>
}

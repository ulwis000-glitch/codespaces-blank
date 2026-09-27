import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, Send } from 'lucide-react'

type InfoPageProps = { notify?: (message: string) => void }

export function AboutPage() {
  return <main className="info-page"><div className="info-hero"><div className="section-label">About cLink</div><h1>cLink makes selling <em>simpler.</em></h1><p>Create a product, copy your cLink, share it anywhere, and connect with customers through one simple link.</p></div><div className="principle-grid">{[['CREATE', 'Create your product or store.'], ['COPY', 'Get your unique cLink.'], ['SHARE', 'Share it anywhere and start selling.']].map(([title, text]) => <article className="principle" key={title}><span>{title}</span><p>{text}</p></article>)}</div><section className="info-copy"><div className="section-label">Why cLink?</div><h2>One simple idea.</h2><p>cLink is built around a simple idea: selling online shouldn't require a complicated setup. Every product and store can have a shareable link that makes it easier to connect sellers and customers.</p></section></main>
}

export function HowItWorksPage() {
  const steps = [['01', 'CREATE', 'Add your product.'], ['02', 'COPY', 'Get your cLink.'], ['03', 'SHARE', 'Send it anywhere.'], ['04', 'SELL', 'Customers open the link and shop.']]
  return <main className="info-page"><div className="info-hero"><div className="section-label">How cLink works</div><h1>From idea to <em>order.</em></h1><p>Four clear steps to put your product in front of the people who want it.</p></div><div className="workflow-list">{steps.map(([number, title, text]) => <article className="workflow-step" key={number}><strong>{number}</strong><div><span>{title}</span><p>{text}</p></div><ArrowRight size={20} /></article>)}</div></main>
}

export function HelpPage() {
  const questions = [['How do I start selling?', 'Create an account, start your store, and add your first product from the seller workspace.'], ['How do I create a cLink?', 'Every product and store gets a shareable cLink automatically when you save it.'], ['How do customers buy?', 'Customers open your shared link, add the product to their cart, and complete checkout.'], ['How do I edit my store?', 'Open Settings or your seller workspace, then choose Store settings to update your details.'], ['How do I contact a seller?', 'Open the seller store page and use the available contact or message option.']]
  const [open, setOpen] = useState<number | null>(null)
  return <main className="info-page help-page"><div className="info-hero"><div className="section-label">Help & support</div><h1>Answers, <em>simply.</em></h1><p>Find a quick answer to common cLink questions.</p></div><div className="faq-list">{questions.map(([question, answer], index) => <div className={open === index ? 'faq-item open' : 'faq-item'} key={question}><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown size={18} /></button>{open === index && <p>{answer}</p>}</div>)}</div></main>
}

export function ContactPage({ notify }: InfoPageProps) {
  const [sent, setSent] = useState(false)
  return <main className="info-page contact-page"><div className="info-hero"><div className="section-label">Contact us</div><h1>Let's keep in <em>touch.</em></h1><p>Have a question, idea, or kind word? Send us a note.</p></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); notify?.('Message sent. Thanks for reaching out!') }}><label>Name<input required name="name" /></label><label>Email<input required type="email" name="email" /></label><label>Message<textarea required name="message" rows={6} /></label><button className="primary-button" type="submit"><Send size={16} /> Send Message</button>{sent && <p className="contact-success"><Check size={16} /> Message sent. Thanks for reaching out!</p>}</form></main>
}

import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const sofas = [
  { name: 'GLOSTAD', details: '3-seat · Knisa dark grey', price: '₹16,990', style: 'modern', url: 'https://www.ikea.com/in/en/p/glostad-3-seat-sofa-knisa-dark-grey-40595937/' },
  { name: 'GAMMALBYN', details: '3-seat · Gunnared dark grey', price: '₹27,990', style: 'classic', url: 'https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-gunnared-dark-grey-00638774/' },
  { name: 'GLOSTAD', details: '2-seat · Knisa dark grey', price: '₹12,990', style: 'modern', url: 'https://www.ikea.com/in/en/p/glostad-2-seat-sofa-knisa-dark-grey-10489009/' },
  { name: 'SÖDERHAMN', details: '6-seat corner · Fridtuna light beige', price: '₹140,980', style: 'relaxed', url: 'https://www.ikea.com/in/en/p/soederhamn-corner-sofa-6-seat-fridtuna-light-beige-s49449668/' },
  { name: 'BÅRSLÖV', details: '3-seat sofa-bed · Tibbleby light grey-turquoise', price: '₹59,990', style: 'relaxed', url: 'https://www.ikea.com/in/en/p/barsloev-3-seat-sofa-bed-tibbleby-light-grey-turquoise-10541583/' },
  { name: 'GULLVALLA', details: '3-seat · Silkeryd dark grey-beige', price: '₹26,990', style: 'modern', url: 'https://www.ikea.com/in/en/p/gullvalla-3-seat-sofa-silkeryd-dark-grey-beige-90618502/' },
  { name: 'LILLESÄTER', details: '3-seat · Gunnared bright green-yellow', price: '₹54,990', style: 'modern', url: 'https://www.ikea.com/in/en/p/lillesaeter-3-seat-sofa-gunnared-bright-green-yellow-60618495/' },
  { name: 'KIVIK', details: '3-seat with chaise · Tresund light beige', price: '₹66,990', style: 'relaxed', url: 'https://www.ikea.com/in/en/p/kivik-3-seat-sofa-with-chaise-longue-tresund-light-beige-s59482841/' },
  { name: 'SALTMYRAN', details: '3-seat · Öreryd blue', price: '₹28,990', style: 'classic', url: 'https://www.ikea.com/in/en/p/saltmyran-3-seat-sofa-oereryd-blue-10618520/' },
  { name: 'FRIHETEN', details: '3-seat sofa-bed · Faringe brown-orange', price: '₹47,990', style: 'relaxed', url: 'https://www.ikea.com/in/en/p/friheten-3-seat-sofa-bed-faringe-brown-orange-80551229/' },
];

const filters = [
  { label: 'All styles', value: 'all' },
  { label: 'Classic', value: 'classic' },
  { label: 'Modern', value: 'modern' },
  { label: 'Relaxed', value: 'relaxed' },
];

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [message, setMessage] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const dialogRef = useRef(null);
  const messageRef = useRef(null);
  const visibleSofas = sofas.filter((sofa) => activeFilter === 'all' || sofa.style === activeFilter);

  function prepareEnquiry(style) {
    setMessage(
      `Hello Praneet’s Sofa Corner! I’m interested in ${style.toLowerCase()}.\n\nMy room size: \nPreferred colour or fabric: \nSeating needed: \nBudget: \n\nPlease share available options and details.`,
    );
    setCopyStatus('');
    dialogRef.current?.showModal();
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(message);
      setCopyStatus('Copied! Your enquiry is ready to share.');
    } catch {
      messageRef.current?.select();
      setCopyStatus('Select and copy the enquiry using your keyboard.');
    }
  }

  return (
    <>
      <div className="festival">
        <span>✦ DEEPAVALI SPECIAL ✦</span>
        <strong>Flat 50% OFF</strong>
        <span>Bring home a brighter corner.</span>
        <a href="tel:+917358952427">Call for offer details ↗</a>
      </div>

      <header>
        <a className="logo" href="#" aria-label="Praneet’s Sofa Corner home">Praneet’s<small>Sofa Corner</small></a>
        <nav aria-label="Main navigation">
          <a href="#collection">The collection</a>
          <a href="#story">Our corner</a>
          <a className="pill" href="#contact">Let’s talk comfort <span>↗</span></a>
        </nav>
      </header>

      <main>
        <div className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Coimbatore · Praneet’s Sofa Corner</span>
            <h1>Your home.<br />Your people.<br />Your <em>corner.</em></h1>
            <p>For slow mornings, long conversations, and a little more room to unwind. Find the sofa that feels like you.</p>
            <a className="solid" href="#collection">Explore sofa styles <span>↗</span></a>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=90" alt="Deep green sofa with soft cushions in a warm, light-filled living room" fetchPriority="high" />
            <div className="badge">Stay a<br />little longer.</div>
            <div className="image-note">A LITTLE INSPIRATION FOR YOUR EVERYDAY.</div>
          </div>
        </div>

        <div className="strip">
          <span>A corner for every home</span>
          <span>Find your favourite silhouette</span>
          <span>Make yourself comfortable</span>
        </div>

        <section id="collection">
          <div className="section-head">
            <div>
              <span className="eyebrow">Find your kind of comfort</span>
              <h2>10 sofas to inspire you.</h2>
            </div>
            <div className="filters" aria-label="Filter sofa inspiration">
              {filters.map((filter) => (
                <button
                  className={`filter${activeFilter === filter.value ? ' active' : ''}`}
                  key={filter.value}
                  type="button"
                  aria-pressed={activeFilter === filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div className="cards">
            {visibleSofas.map((sofa) => (
              <article className="card reference-card" data-style={sofa.style} key={`${sofa.name}-${sofa.details}`}>
                <span className="eyebrow">SOFA INSPIRATION · IKEA</span>
                <h3>{sofa.name}</h3>
                <p>{sofa.details}</p>
                <div className="reference-price">{sofa.price}<small>web reference price</small></div>
                <div className="card-info">
                  <a className="source-link" href={sofa.url} target="_blank" rel="noopener noreferrer">View source ↗</a>
                  <button className="circle enquire" type="button" onClick={() => prepareEnquiry(`${sofa.name} — ${sofa.details}`)} aria-label={`Enquire about ${sofa.name} ${sofa.details}`}>↗</button>
                </div>
              </article>
            ))}
          </div>
          <p className="caption">Reference catalogue: 10 IKEA India models and listed prices checked on 15 October 2026. These are third-party examples, not confirmed showroom inventory or Praneet’s Sofa Corner prices. Prices may change. Call for our available sofas and final Deepavali prices. No IKEA affiliation is implied.</p>
        </section>

        <section className="story" id="story">
          <div className="story-image" role="img" aria-label="Inviting living room with a neutral sofa, natural textures, and warm accents" />
          <div className="story-copy">
            <span className="eyebrow">Welcome to Praneet’s Sofa Corner</span>
            <h2>More than a sofa.<br />A place to belong.</h2>
            <p>The best corner of a home is the one everyone gravitates towards. Somewhere to put your feet up, catch up, or simply be.</p>
            <p>That’s the feeling behind Praneet’s Sofa Corner. Explore a look you love, think about the way you live, and start imagining your own comfortable corner.</p>
            <a className="text-link" href="#contact">Let’s find your corner &nbsp; ↗</a>
          </div>
        </section>

        <section className="contact" id="contact">
          <span className="eyebrow">Let’s make room for you</span>
          <h2>Found your kind of cosy?</h2>
          <p>Visit your next comfortable corner in Coimbatore. Call us to discuss sofa styles, availability, and our flat 50% off Deepavali offer.</p>
          <a className="solid" href="tel:+917358952427">Call 73589 52427 <span>↗</span></a>
          <button className="pill enquire" type="button" onClick={() => prepareEnquiry('A sofa for my home — Deepavali offer')}>Prepare an enquiry ↗</button>
          <small>Coimbatore, Tamil Nadu · Call for the exact showroom address and opening hours.</small>
        </section>
      </main>

      <footer>
        <a className="logo" href="#">Praneet’s<small>Sofa Corner</small></a>
        <p>A little more comfort. A little more home.</p>
        <p>© {new Date().getFullYear()} Praneet’s Sofa Corner</p>
      </footer>

      <dialog ref={dialogRef}>
        <h2>Let’s find your sofa.</h2>
        <p>Edit your enquiry, then copy it. Call <a href="tel:+917358952427">73589 52427</a> to discuss it with our Coimbatore showroom.</p>
        <label htmlFor="message">Your enquiry</label>
        <textarea id="message" ref={messageRef} value={message} onChange={(event) => setMessage(event.target.value)} />
        <button className="solid" type="button" onClick={copyEnquiry}>Copy enquiry ↗</button>
        <button className="close" type="button" onClick={() => dialogRef.current?.close()}>Close</button>
        <div id="copy-status" role="status">{copyStatus}</div>
      </dialog>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
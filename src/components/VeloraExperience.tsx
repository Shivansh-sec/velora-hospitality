import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Plus, Minus, Instagram, MoveUpRight } from 'lucide-react'
import { site } from '../data/site'

const scenes = [
  { time: '06:42', label: 'FIRST LIGHT', title: 'The day begins\nbefore the world.', note: 'A quiet morning, a long horizon, and nowhere else to be.' },
  { time: '11:18', label: 'SLOW HOURS', title: 'Find your own\nkind of nowhere.', note: 'Take the long way. Stay a little longer. Let the hours unfold.' },
  { time: '17:36', label: 'GOLDEN HOUR', title: 'Chase the last\nof the sunlight.', note: 'The light changes. The pace does not. This is your time.' },
]
const rooms = [
  { name: 'The Hideaway', type: 'PRIVATE POOL VILLA', size: '86 m²', guests: '2 guests', view: 'Garden + pool', rate: 'From ₹18,500', detail: 'A tucked-away sanctuary with a private plunge pool, open-air shower and a terrace made for doing absolutely nothing.' },
  { name: 'The Lookout', type: 'PANORAMIC SUITE', size: '64 m²', guests: '2 guests', view: 'Horizon view', rate: 'From ₹14,000', detail: 'Wake up to an uninterrupted view. Thoughtful materials, a generous soaking tub and a window seat for the slow mornings.' },
  { name: 'The Gathering House', type: 'TWO-BEDROOM RESIDENCE', size: '142 m²', guests: '4 guests', view: 'Landscape view', rate: 'From ₹29,000', detail: 'Room for everyone, with two private bedrooms, a shared living space and a wide outdoor deck.' },
]

export function VeloraExperience() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scene, setScene] = useState(0)
  const [openRoom, setOpenRoom] = useState<number | null>(0)
  const [sent, setSent] = useState(false)
  useEffect(() => { document.title = 'VELORA — Stay out of the ordinary' }, [])
  const current = scenes[scene]
  const links = [{ label: 'THE PLACE', href: '#place' }, { label: 'THE STAY', href: '#stay' }, { label: 'THE FEELING', href: '#feeling' }, { label: 'ENQUIRE', href: '#enquire' }]
  return <div className="velora">
    <div className="topline"><span>INDEPENDENT HOSPITALITY / EST. 2026</span><span>NOT ALL WHO WANDER ARE LOST <i>✳</i></span><span>SCROLL TO EXPLORE ↓</span></div>
    <header className="v-header">
      <a href="#" className="v-logo" aria-label="Velora home">VELORA<span>®</span></a>
      <div className="v-header-center">A PLACE TO FEEL<br/>A LITTLE MORE ALIVE.</div>
      <a href="#enquire" className="v-book">MAKE YOUR ESCAPE <ArrowUpRight size={15}/></a>
      <button className="v-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    {menuOpen && <div className="v-menu-panel"><span className="v-menu-kicker">FIND YOUR WAY</span>{links.map((link,i)=><a key={link.href} href={link.href} onClick={()=>setMenuOpen(false)}><small>0{i+1}</small>{link.label}<ArrowUpRight/></a>)}<p>THE ART OF GETTING AWAY.</p></div>}
    <main>
      <section className="v-hero">
        <div className="v-hero-image" />
        <div className="v-hero-shade"/>
        <div className="v-hero-top"><span>01° / A DIFFERENT POINT OF VIEW</span><span>YOUR OWN LITTLE WORLD ↘</span></div>
        <div className="v-hero-copy">
          <p className="v-kicker"><span/> A STAY THAT STAYS WITH YOU</p>
          <h1>STAY<br/><em>OUTSIDE</em><br/>THE <span>ORDINARY</span><b>®</b></h1>
          <div className="v-hero-bottom"><p>Somewhere between the familiar<br/>and the feeling of somewhere new.</p><a href="#place" className="v-round-link">DISCOVER<br/>VELORA <ArrowDown size={17}/></a></div>
        </div>
        <div className="v-hero-index"><span>01</span><i/>03</div>
        <div className="v-hero-stamp">GO<br/>WHERE<br/>YOU<br/>FEEL.</div>
      </section>
      <div className="v-marquee" aria-label="Find your somewhere"><div>{Array.from({length:4},(_,i)=><span key={i}>FIND YOUR SOMEWHERE <b>✳</b> TAKE THE LONG WAY <b>✳</b></span>)}</div></div>
      <section className="v-intro" id="place">
        <div className="v-section-tag"><span>01 / THE PLACE</span><span>NOT A PLACE TO BE SEEN.<br/>A PLACE TO FEEL.</span></div>
        <div className="v-intro-grid"><h2>THE WORLD<br/>CAN <em>WAIT.</em></h2><div className="v-intro-aside"><span className="v-big-star">✳</span><p>Trade the usual for the unexpected. Find a slower rhythm, a new perspective and the kind of moments you wish could last a little longer.</p><a className="v-text-link" href="#feeling">GET TO KNOW US <ArrowUpRight/></a></div></div>
        <div className="v-intro-image"><img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2000&q=90" alt="A secluded resort nestled in lush tropical landscape" loading="lazy"/><span>01 — A DIFFERENT KIND OF ESCAPE</span><strong>COME AS YOU ARE.<br/>LEAVE A LITTLE DIFFERENT.</strong></div>
      </section>
      <section className="v-time" id="feeling">
        <div className="v-section-tag"><span>02 / THE FEELING</span><span>NO SCHEDULE. JUST A SENSE OF TIME.</span></div>
        <div className="v-time-head"><h2>TIME, ON<br/><em>YOUR TERMS.</em></h2><p>There is no right way to spend a day here. Just a few ideas, should you need them.</p></div>
        <div className="v-time-feature">
          <div className="v-time-image"><img src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=85" alt="Sunrise over a quiet green landscape" loading="lazy"/><span className="v-time-image-label">A DAY AT VELORA / 24 HOURS YOURS</span></div>
          <div className="v-time-card"><div className="v-time-card-top"><span>{current.label}</span><span>0{scene+1} / 03</span></div><strong>{current.time}</strong><h3>{current.title.split('\n').map((line,i)=><span key={i}>{line}<br/></span>)}</h3><p>{current.note}</p><div className="v-time-controls"><button onClick={()=>setScene((scene+2)%3)} aria-label="Previous time"><ArrowRight className="v-prev"/></button><div className="v-time-dots">{scenes.map((s,i)=><button key={s.time} onClick={()=>setScene(i)} className={scene===i?'active':''} aria-label={s.label}/>)}</div><button onClick={()=>setScene((scene+1)%3)} aria-label="Next time"><ArrowRight/></button></div></div>
        </div>
      </section>
      <section className="v-stay" id="stay">
        <div className="v-section-tag"><span>03 / THE STAY</span><span>ROOM FOR A CHANGE OF SCENE.</span></div>
        <div className="v-stay-head"><h2>GOOD NIGHTS.<br/><em>BETTER MORNINGS.</em></h2><a className="v-text-link" href="#enquire">FIND YOUR ROOM <ArrowUpRight/></a></div>
        <div className="v-room-layout"><div className="v-room-photo"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=90" alt="Warm contemporary hotel suite with natural textures" loading="lazy"/><span>ROOM TO BREATHE / SPACE TO BE</span></div><div className="v-room-list">{rooms.map((room,i)=><article className={openRoom===i?'v-room is-open':'v-room'} key={room.name}><button className="v-room-toggle" onClick={()=>setOpenRoom(openRoom===i?null:i)} aria-expanded={openRoom===i}><span className="v-room-number">0{i+1}</span><span className="v-room-name">{room.name}<small>{room.type}</small></span><span className="v-room-icon">{openRoom===i?<Minus/>:<Plus/>}</span></button>{openRoom===i&&<div className="v-room-detail"><p>{room.detail}</p><div className="v-room-specs"><span>{room.size}<small>SIZE</small></span><span>{room.guests}<small>CAPACITY</small></span><span>{room.view}<small>OUTLOOK</small></span></div><div className="v-room-rate">{room.rate} <a href="#enquire">ENQUIRE <ArrowUpRight/></a></div></div>}</article>)}</div></div>
        <p className="v-demo-note">* ILLUSTRATIVE DEMO RATES — PROPERTY, AVAILABILITY AND FINAL PRICING TO BE CONFIRMED.</p>
      </section>
      <section className="v-big-image"><img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=2200&q=90" alt="Open ocean meeting the horizon" loading="lazy"/><div><span>THE BEST PLANS ARE THE ONES YOU DON'T MAKE.</span><h2>LET THE<br/><em>OUTSIDE</em><br/>IN.</h2></div><span className="v-image-index">VELORA / 03—03</span></section>
      <section className="v-enquire" id="enquire"><div className="v-section-tag"><span>04 / YOUR NEXT CHAPTER</span><span>LET'S MAKE IT HAPPEN.</span></div><div className="v-enquire-grid"><div><h2>YOUR<br/>SOMEWHERE<br/><em>AWAITS.</em></h2><p>Tell us a little about the escape you're dreaming of. We'll take it from here.</p><div className="v-contact-mark">✳</div></div><form onSubmit={e=>{e.preventDefault();const form=e.currentTarget;const data=new FormData(form);const subject=encodeURIComponent('VELORA stay enquiry');const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nDates: '+data.get('dates')+'\nGuests: '+data.get('guests')+'\n\nMessage: '+data.get('message'));window.location.href='mailto:'+site.enquiryEmail+'?subject='+subject+'&body='+body;setSent(true)}}><label>YOUR NAME<input name="name" placeholder="How should we call you?" required/></label><label>EMAIL ADDRESS<input name="email" type="email" placeholder="you@example.com" required/></label><div className="v-form-row"><label>WHEN?<input name="dates" placeholder="Your preferred dates"/></label><label>WHO'S COMING?<select name="guests" defaultValue="2 guests"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label></div><label>A LITTLE MORE<input name="message" placeholder="Tell us what you're imagining..."/></label><button className="v-submit" type="submit">{sent?'OPEN YOUR EMAIL TO SEND':'SEND YOUR ENQUIRY'} <ArrowUpRight/></button><small>THIS DEMO OPENS YOUR EMAIL APP. NO BOOKING IS MADE ONLINE.</small></form></div></section>
    </main>
    <footer className="v-footer"><div className="v-footer-top"><a className="v-logo" href="#">VELORA<span>®</span></a><p>STAY OUTSIDE<br/>THE ORDINARY.</p><a className="v-back-top" href="#">BACK TO TOP ↑</a></div><div className="v-footer-bottom"><span>© {new Date().getFullYear()} VELORA — CONCEPT HOSPITALITY BRAND</span><span>MADE FOR THE ART OF GETTING AWAY</span><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17}/></a></div><div className="v-footer-giant">VELORA</div></footer>
    <a className="v-floating-book" href="#enquire">PLAN YOUR ESCAPE <MoveUpRight size={15}/></a>
  </div>
}

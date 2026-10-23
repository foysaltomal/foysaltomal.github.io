"use client";

import { useMemo, useState } from "react";
import galleryData from "./gallery-data.json";

type Memory = {
  filename: string; src: string; title: string; caption: string;
  date: string; category: string; location: string;
};
const memories = galleryData as Memory[];
const filters = ["All moments", "Daily Life", "Special Moments", "Creative Works"];

export default function Home() {
  const [filter, setFilter] = useState("All moments");
  const [light, setLight] = useState(false);
  const visible = useMemo(() => memories.filter((m) => filter === "All moments" || m.category === filter), [filter]);
  return (
    <main className={light ? "site light" : "site"}>
      <header className="topbar wrap">
        <a className="brand" href="#home">FOYSAL<span>.</span></a>
        <nav><a href="#home">Home</a><a href="#memories">Memories</a><a href="#how-to-add">How to add</a></nav>
        <button className="theme" onClick={() => setLight(!light)}>{light ? "☾ Dark" : "☼ Light"}</button>
      </header>
      <section className="hero wrap" id="home">
        <div className="hero-copy"><p className="eyebrow">A PERSONAL VISUAL DIARY</p><h1>A life in<br/><em>moments.</em></h1><p className="intro">Little everyday things. Big unforgettable days. The people, places, and stories worth keeping close.</p><a className="button primary" href="#memories">Explore memories ↗</a><div className="stats"><strong>{memories.length.toString().padStart(2, "0")}<small> PHOTOS & STORIES</small></strong><strong>∞<small> MOMENTS TO KEEP</small></strong></div></div>
        <div className="hero-art"><div className="orb"/><div className="note"><b>Collect the little things.</b><span>One photo, one story, one day at a time.</span></div></div>
      </section>
      <section className="wrap section" id="memories">
        <div className="section-head"><div><p className="eyebrow">THE MEMORY WALL</p><h2>Moments worth keeping.</h2><p className="muted">Every photo holds a story. Here are mine.</p></div><span className="count">{visible.length} {visible.length === 1 ? "moment" : "moments"}</span></div>
        <div className="filters">{filters.map((f) => <button key={f} className={filter === f ? "chip active" : "chip"} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <div className="gallery">{visible.length ? visible.map((m) => <article className="card" key={m.filename}><div className="photo"><img src={m.src} alt={m.title} loading="lazy"/><span className="badge">{m.category}</span></div><div className="card-body"><h3>{m.title}</h3>{m.caption ? <p className="caption">{m.caption}</p> : <p className="caption placeholder-caption">A moment waiting for its story…</p>}<div className="meta"><span>{m.date}</span>{m.location ? <span>⌖ {m.location}</span> : null}</div></div></article>) : <div className="empty"><b>No photos in this category yet.</b><p>Upload a photo to the folder and it will appear here after the site rebuilds.</p></div>}</div>
      </section>
      <section className="wrap section how" id="how-to-add"><p className="eyebrow">KEEP THE STORIES COMING</p><h2>Add a photo in two simple steps.</h2><div className="steps"><article><span>01</span><h3>Upload the photo</h3><p>Open the repository on GitHub and upload your image into <code>public/photos/</code>. Commit the change to <code>main</code>.</p></article><article><span>02</span><h3>Write the story</h3><p>Edit <code>public/photos/captions.json</code>. Add a title, caption, date, location, and category using the exact photo filename.</p></article><article><span>03</span><h3>It goes live</h3><p>GitHub Actions rebuilds the Next.js site and publishes it automatically. Wait a minute or two, then refresh the website.</p></article></div><a className="button" href="https://github.com/foysaltomal/foysaltomal.github.io/tree/main/public/photos" target="_blank" rel="noreferrer">Open photo folder on GitHub ↗</a></section>
      <footer className="wrap footer"><span>© {new Date().getFullYear()} <b>Foysal Tomal</b> · A life in moments.</span><span>Built with Next.js · Published on GitHub Pages</span></footer>
    </main>
  );
}

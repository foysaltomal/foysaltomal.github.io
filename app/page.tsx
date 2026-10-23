"use client";

import { useState } from "react";
import galleryData from "./gallery-data.json";

type Memory = { filename: string; src: string; title: string; caption: string; date: string; category: string; location: string };
const memories = galleryData as Memory[];

export default function Home() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [profileLiked, setProfileLiked] = useState(false);
  return <main className="fb-page">
    <header className="fb-header"><div className="fb-header-inner">
      <a className="fb-mark" href="#top" aria-label="Home">f</a>
      <div className="fb-search">🔍 <span>Search</span></div>
      <nav className="fb-main-nav"><a className="selected" href="#top" aria-label="Home">⌂</a><a href="#posts">▤</a><a href="#photos">▧</a></nav>
      <a className="fb-me" href="#top"><span className="mini-profile">F</span><b>Foysal</b></a>
    </div></header>
    <section className="fb-profile-shell" id="top">
      <div className="fb-cover">
        <img src="/photos/cover.jpg" alt="Foysal cover photo" onError={(e)=>{e.currentTarget.style.display="none"}} />
        <div className="cover-fallback"><b>Foysal</b></div>
      </div>
      <div className="fb-profile-info">
        <div className="fb-avatar"><img src="/photos/profile.jpg" alt="Foysal profile picture" onError={(e)=>{e.currentTarget.style.display="none"}}/><span>F</span></div>
        <div className="fb-profile-name"><h1>Foysal</h1><p>Personal profile</p></div>
        <div className="fb-profile-buttons"><button className={profileLiked ? "fb-blue liked" : "fb-blue"} onClick={()=>setProfileLiked(!profileLiked)}>{profileLiked ? "✓ Liked" : "👍 Like"}</button><a className="fb-gray" href="#photos">▧ Photos</a></div>
      </div>
      <nav className="fb-tabs"><a className="active" href="#posts">Posts</a><a href="#photos">Photos</a><a href="#about">About</a></nav>
    </section>
    <div className="fb-main-content">
      <aside className="fb-side">
        <section className="fb-box"><h2>Intro</h2><p className="fb-intro">👋 Welcome to my profile!</p><div className="fb-info-row">🌐 <span>Personal profile website</span></div><div className="fb-info-row">📷 <span>Photos & memories</span></div><button className={profileLiked ? "fb-side-like liked" : "fb-side-like"} onClick={()=>setProfileLiked(!profileLiked)}>{profileLiked ? "✓ Liked" : "👍 Like profile"}</button></section>
        <section className="fb-box" id="photos"><div className="fb-box-title"><h2>Photos</h2><a href="#photos-grid">See all</a></div>{memories.length ? <div className="fb-mini-grid">{memories.slice(0,6).map(m=><a key={m.filename} href={m.src}><img src={m.src} alt="Foysal photo" loading="lazy"/></a>)}</div> : <p className="fb-muted">Photos will appear here.</p>}</section>
      </aside>
      <section className="fb-posts" id="posts">
        <div className="fb-box fb-composer"><div className="fb-composer-top"><span className="mini-profile">F</span><span>What’s on your mind, Foysal?</span></div><div className="fb-composer-bottom">▧ <span>Photo</span><span>·</span><span>Share a memory</span></div></div>
        {memories.length ? memories.map(m=><article className="fb-box fb-post" key={m.filename}>
          <div className="fb-post-author"><span className="mini-profile">F</span><div><b>Foysal</b><small>{m.date || "Shared a memory"} · 🌐</small></div><span className="fb-more">•••</span></div>
          {m.caption || m.title ? <p className="fb-post-caption">{m.caption || m.title}</p> : null}
          <img className="fb-post-photo" src={m.src} alt="Photo shared by Foysal" loading="lazy"/>
          <div className="fb-post-actions"><button className={liked[m.filename] ? "liked" : ""} onClick={()=>setLiked(prev=>({...prev,[m.filename]:!prev[m.filename]}))}>{liked[m.filename] ? "👍 Liked" : "👍 Like"}</button><button onClick={()=>navigator.clipboard?.writeText(window.location.href)}>↗ Share</button></div>
        </article>) : <article className="fb-box fb-empty"><h2>Welcome to Foysal’s profile</h2><p>Photos shared on this profile will appear here.</p></article>}
        <section className="fb-box fb-about" id="about"><h2>About Foysal</h2><p>This is my personal profile — a place for photos and memories.</p></section>
      </section>
    </div>
    <footer className="fb-footer">Foysal · Personal profile</footer>
  </main>;
}

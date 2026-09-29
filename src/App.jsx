import { useState } from "react";
import { profile, sections } from "./data.js";

function Card({ item }) {
  return (
    <article className="card">
      <h3>{item.title}</h3>
      <p>{item.summary}</p>
      {item.result && <p className="result">{item.result}</p>}
      <ul className="tags">
        {item.tags?.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="links">
        {item.links?.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [active, setActive] = useState(sections[0].id);
  const section = sections.find((s) => s.id === active);

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="bio">{profile.bio}</p>
          <p className="skills">{profile.skills}</p>
          <nav className="contact" aria-label="Contact links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <main className="wrap">
        <div className="tabs" role="tablist" aria-label="Portfolio sections">
          {sections.map((s) => (
            <button
              key={s.id}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={s.id === active}
              aria-controls={`panel-${s.id}`}
              className={s.id === active ? "tab on" : "tab"}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <section role="tabpanel" id={`panel-${section.id}`} aria-labelledby={`tab-${section.id}`}>
          <p className="blurb">{section.blurb}</p>
          <div className="grid">
            {section.items.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <p>{profile.name}. Built with React and hosted on GitHub Pages.</p>
      </footer>
    </>
  );
}

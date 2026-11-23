import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Explore from './pages/dev/mockups/ExploreClubsMockup';
import Dashboard from './pages/dev/mockups/StudentDashboardMockup';
import Workspace from './pages/dev/mockups/WorkspaceCommandCenterMockup';
import './style.css';

const screens = [
  { title: 'Explore Clubs', description: 'Discovery, categories and club membership states.', Component: Explore },
  { title: 'Student Dashboard', description: 'A student’s upcoming events, tasks and club activity.', Component: Dashboard },
  { title: 'Club Workspace', description: 'An executive’s overview of setup, people and club operations.', Component: Workspace },
];

function App() {
  const [current, setCurrent] = useState(0);
  const { title, description, Component } = screens[current];
  return <main className="portfolio">
    <header>
      <p className="eyebrow">PRODUCT DESIGN PORTFOLIO</p>
      <h1>Gryph ClubConnect</h1>
      <p>Three interface concepts for discovering and running student clubs.</p>
      <p className="demo-note">Demo only. All examples are fictional. Controls inside the preview are illustrative.</p>
    </header>
    <nav aria-label="Demo screens">
      {screens.map((screen, index) => <button key={screen.title} type="button"
        aria-pressed={index === current} onClick={() => setCurrent(index)}>{screen.title}</button>)}
    </nav>
    <section aria-label={title}>
      <h2>{title}</h2><p>{description}</p>
      <div className="canvas" tabIndex={0} aria-label={title + ' preview; scroll horizontally on small screens'}>
        <div className="desktop-preview"><Component /></div>
      </div>
    </section>
  </main>;
}

createRoot(document.getElementById('root')!).render(<App />);

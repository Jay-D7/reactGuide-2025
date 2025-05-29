import { useState } from 'react';
import './styles.css';

const content = [
  [
    'React is extremely popular',
    'It makes building complex, interactive UIs a breeze',
    "It's powerful & flexible",
    'It has a very active and versatile ecosystem',
  ],
  [
    'Components, JSX & Props',
    'State',
    'Hooks (e.g., useEffect())',
    'Dynamic rendering',
  ],
  [
    'Official web page (react.dev)',
    'Next.js (Fullstack framework)',
    'React Native (build native mobile apps with React)',
  ],
  [
    'React Router (for routing in React apps)',
    'Redux (state management)',
    'React Query (data fetching)',
    'Styled Components (CSS-in-JS library)',
  ],
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <header>
        <img src="react-logo-xs.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}
          >
            Why React?
          </button>
          <button
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}
          >
            Core Features
          </button>
          <button
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => setActiveTab(2)}
          >
            Related Resources
          </button>
          <button
            className={activeTab === 3 ? 'active' : ''}
            onClick={() => setActiveTab(3)}
          >
            Related Resources
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeTab].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

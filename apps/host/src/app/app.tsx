import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Navigate = React.lazy(() => import('@acme/Navigate'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Navigate />
        </li>
        lo
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;

import * as React from 'react';
import { Layout } from '../layout';
import "../global.css";

const Home = React.lazy(() => import('home/Module'));

const Navigate = React.lazy(() => import('@acme/Navigate'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <Layout left={<Navigate />} center={<Home />} right={<Right />} />
    </React.Suspense>
  );
}

const Right = () => {
  return <h1>Right</h1>;
};

export default App;

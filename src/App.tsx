import { Route, Routes } from 'react-router-dom';
import './index.css';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

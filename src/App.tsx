import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PartyPage from 'pages/PartyPage';
import PokemonPage from 'pages/PokemonPage';
import HeaderLink from 'components/HeaderLink';
import RQSuperHeroesPage from './pages/RQSuperHeroesPage';
import HomePage from './pages/HomePage';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <HeaderLink route="/" title="Home" />
              </li>

              <li>
                <HeaderLink route="/party" title="My Party" />
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="/party" element={<PartyPage />} />
            <Route path="/pokemon" element={<PokemonPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

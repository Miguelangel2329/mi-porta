// src/App.tsx
import React from 'react';
import AppRouter from './routes/AppRouter';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

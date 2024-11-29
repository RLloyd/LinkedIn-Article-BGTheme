// src/App.tsx

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { lightTheme, darkTheme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import MashMediaStudio from './pages/MashMediaStudio/MashMediaStudio';
import ColorPalette from '@/components/ColorPalette';
import Home from '@/pages/Home';
import SharedControlWidget from './components/SharedControlWidget/SharedControlWidget';

const RouteLogger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Current route:', location.pathname);
  }, [location]);

  return <>{children}</>;
};

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Background isDarkTheme={isDarkTheme} />
      <Router>
        <RouteLogger>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Routes>
            <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
            <Route path="/mashmedia" element={
              <>
                <MashMediaStudio />
                <SharedControlWidget toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </>
            } />
            <Route path="/digitalone" element={
              <>
                <ColorPalette />
                <SharedControlWidget toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </>
            } />
            <Route path="/zenmonics" element={
              <>
                <div>Zenmonics</div>
                <SharedControlWidget toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </>
            } />
            <Route path="/styleguide" element={
              <>
                <div>Styleguide</div>
                <SharedControlWidget toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </>
            } />
            <Route path="/profile" element={
              <>
                <div>Profile</div>
                <SharedControlWidget toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
              </>
            } />
            <Route
              path="*"
              element={
                <div style={{
                  padding: '2rem',
                  textAlign: 'center',
                  marginTop: '80px'
                }}>
                  404 - Page not found
                </div>
              }
            />
          </Routes>
        </RouteLogger>
      </Router>
    </ThemeProvider>
  );
};

export default App;
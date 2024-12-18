// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';

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
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/"                 element={<Home/>} />
          <Route path="/mediamash-studio" element={<div>MediaMash Studio</div>} />
          <Route path="/digitalone"       element={<div>DigitalOne</div>} />
          <Route path="/zenmonics"        element={<div>Zenmonics</div>} />
          <Route path="/styleguide"       element={<div>Styleguide</div>} />
          <Route path="/profile"          element={<div>Profile</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
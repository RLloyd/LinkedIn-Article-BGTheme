// src/App.tsx

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation  // Add this
} from 'react-router-dom';
import { lightTheme, darkTheme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import MashMediaStudio from './pages/MashMediaStudio/MashMediaStudio';
import ColorPalette from '@/components/ColorPalette';
import Home from '@/pages/Home';

// Create a wrapper component that will log route changes
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
            <Route path="/" element={<Home />} />
            <Route path="/mashmedia" element={<MashMediaStudio />} />
            <Route path="/digitalone" element={<ColorPalette />} />
            <Route path="/zenmonics" element={<div>Zenmonics</div>} />
            <Route path="/styleguide" element={<div>Styleguide</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
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

/*-+++++++++++++++++++++++++++++++++++++++++++++++++-*/
// import React, { useState } from "react";
// import { ThemeProvider } from "styled-components";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lightTheme, darkTheme } from "@/styles/theme";
// import { GlobalStyles } from "@/styles/GlobalStyles";
// import Background from "@/components/Background";
// import Navbar from "@/components/Navbar";
// import MashMediaStudio from "./pages/MashMediaStudio/MashMediaStudio";
// // import Loader from './pages/Loader/Loader';
// import Home from "@/pages/Home";
// // import ColorPalette from './components/ColorPalette/ColorPalette';
// import ColorPalette from "@/components/ColorPalette";
// // import { Loader } from 'lucide-react';

// const App: React.FC = () => {
// 	const [isDarkTheme, setIsDarkTheme] = useState(false);
// 	//   const currentTheme = isDarkTheme ? darkTheme : lightTheme;

// 	const toggleTheme = () => {
// 		setIsDarkTheme(!isDarkTheme);
// 	};

// 	return (
// 		//  <ThemeProvider theme={currentTheme}>
// 		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
// 			<GlobalStyles />
// 			<Background isDarkTheme={isDarkTheme} />
// 			<Router>
// 				<Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
// 				<Routes>
// 					{/* <Route path="/"                 element={<Home/>} /> */}
// 					{/* <Route path="/"                 element={<Loader/>} /> */}
// 					{/* <Route path="/BulkLoading"      element={<div>MediaMash Studio</div>} /> */}
// 					<Route path="/" element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
// 					<Route path="/mashmedia" element={<MashMediaStudio />} />
// 					{/* <Route path="/digitalone"       element={<div>DigitalOne</div>} /> */}
// 					{/* <Route path="/colorpalette"       element={<div><ColorPalette/></div>} /> */}
// 					{/* <Route path="/digitalone/colorpalette" element={<ColorPalette />} /> */}
// 					{/* <Route path="/digitalone"       element={<ColorPalette />} /> */}
// 					<Route path="/digitalone/colorpalette" element={<ColorPalette />} />
// 					<Route path="/zenmonics" element={<div>Zenmonics</div>} />
// 					<Route path="/styleguide" element={<div>Styleguide</div>} />
// 					<Route path="/profile" element={<div>Profile</div>} />
// 					{/* Add a catch-all route for debugging */}
// 					<Route path="*" element={<div>404 - Page not found</div>} />
// 				</Routes>
// 			</Router>
// 		</ThemeProvider>
// 	);
// };

// export default App;

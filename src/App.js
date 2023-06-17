// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // change here
import { ThemeProvider } from 'styled-components';
import { ThemeContext, lightTheme, darkTheme } from './ThemeContext';
import { GlobalStyles } from './global';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router>
            <Layout>
              <Routes>  // change here
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/dashboard" exact component={Dashboard} />
              </Routes>  // and here
            </Layout>
          </Router>
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

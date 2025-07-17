import './App.css'

import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
// @mantine/core package styles must always be imported before any other Mantine package styles:
import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
  return <MantineProvider>{
    <>
      <Header />
      <Home />
      <Portfolio />
      <Footer />
    </>
  }</MantineProvider>;
}

export default App

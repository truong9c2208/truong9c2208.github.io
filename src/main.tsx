import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "@radix-ui/themes/styles.css";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Theme } from '@radix-ui/themes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <Theme appearance='dark' accentColor='brown'>
        <App />
      </Theme>
    </ParallaxProvider>
  </React.StrictMode>,
)
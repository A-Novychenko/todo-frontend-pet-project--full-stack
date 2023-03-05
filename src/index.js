import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppHook } from 'components/App';
// import { App, AppHook } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppHook />
  </React.StrictMode>
);

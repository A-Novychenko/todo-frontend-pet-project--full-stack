import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserProvider } from 'context/UserProvider';
// import { App, AppHook } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider value={null}>
      <App />
    </UserProvider>
  </React.StrictMode>
);

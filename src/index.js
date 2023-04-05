import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserProvider } from 'context/UserProvider';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import { App, AppHook } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProvider value={null}>
        <App />
      </UserProvider>
    </Provider>
  </React.StrictMode>
);

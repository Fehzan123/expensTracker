import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Aouth-context';
import { UserProvidire } from './UserUpdateContext';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Provider store={store}>
      <AuthContextProvider>
        <BrowserRouter>
          <UserProvidire>
            <App />
          </UserProvidire>
        </BrowserRouter>
      </AuthContextProvider>
      </Provider>

  </React.StrictMode>
);

reportWebVitals();
